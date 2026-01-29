import { google, drive_v3 } from 'googleapis';
import { Readable } from 'stream';

interface UploadFileResult {
  id: string;
  webViewLink: string;
  webContentLink: string;
}

// Define interface for server-side file objects
interface ServerFile {
  name: string;
  type: string;
  size: number;
  arrayBuffer(): Promise<ArrayBuffer>;
}

class GoogleDriveService {
  private auth: any;
  private drive: drive_v3.Drive;

  constructor() {
    console.log('Google Drive Service - Initializing with credentials:');
    console.log('GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'SET' : 'UNDEFINED');
    console.log('GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? 'SET' : 'UNDEFINED');
    
    // Initialize Google Auth with service account credentials
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    this.drive = google.drive({ version: 'v3', auth: this.auth });
    console.log('Google Drive Service - Initialized successfully');
  }

  /**
   * Upload a file to Google Drive
   */
  async uploadFile(
    file: any, // Accept any file-like object from server
    folderId?: string,
    fileName?: string
  ): Promise<UploadFileResult> {
    try {
      console.log('Google Drive Service - uploadFile called with:', {
        fileType: typeof file,
        fileKeys: file ? Object.keys(file) : 'null',
        hasArrayBuffer: file && 'arrayBuffer' in file,
        hasBuffer: file && 'buffer' in file,
        folderId: folderId,
        fileName: fileName
      });

      // Handle different file object types from server
      let fileBuffer: Buffer;
      let mimeType: string;
      let originalName: string;

      if (file instanceof Buffer) {
        // If it's already a buffer
        fileBuffer = file;
        mimeType = 'application/octet-stream';
        originalName = fileName || 'uploaded_file';
        console.log('Handling as Buffer object');
      } else if (file && typeof file === 'object' && 'arrayBuffer' in file) {
        // If it has arrayBuffer method (like Next.js File)
        console.log('Handling as File object with arrayBuffer');
        const buffer = await file.arrayBuffer();
        fileBuffer = Buffer.from(buffer);
        mimeType = file.type || 'application/octet-stream';
        originalName = file.name || fileName || 'uploaded_file';
      } else if (file && typeof file === 'object' && 'buffer' in file) {
        // If it has buffer property (like multer file)
        console.log('Handling as Multer file object');
        fileBuffer = file.buffer;
        mimeType = file.mimetype || 'application/octet-stream';
        originalName = file.originalname || fileName || 'uploaded_file';
      } else {
        console.log('Invalid file object - throwing error');
        throw new Error('Invalid file object provided');
      }

      // Create readable stream from buffer
      const media = {
        mimeType: mimeType,
        body: Readable.from(fileBuffer),
      };

      const response = await this.drive.files.create({
        requestBody: {
          name: fileName || originalName,
          parents: folderId ? [folderId] : undefined,
          mimeType: mimeType,
        },
        media,
        fields: 'id, webViewLink, webContentLink',
        supportsAllDrives: true,
      });

      if (!response.data.id) {
        throw new Error('Failed to upload file to Google Drive');
      }

      // Set file permissions to be viewable by anyone with the link
      await this.drive.permissions.create({
        fileId: response.data.id,
        requestBody: {
          type: 'anyone',
          role: 'reader',
        },
        supportsAllDrives: true,
      });

      return {
        id: response.data.id,
        webViewLink: response.data.webViewLink || '',
        webContentLink: response.data.webContentLink || '',
      };
    } catch (error) {
      console.error('Error uploading file to Google Drive:', error);
      throw new Error('Failed to upload file to Google Drive');
    }
  }

  /**
   * Create a folder in Google Drive
   */
  async createFolder(folderName: string, parentFolderId?: string): Promise<string> {
    try {
      const response = await this.drive.files.create({
        requestBody: {
          name: folderName,
          mimeType: 'application/vnd.google-apps.folder',
          parents: parentFolderId ? [parentFolderId] : undefined,
        },
        fields: 'id',
      });

      if (!response.data.id) {
        throw new Error('Failed to create folder in Google Drive');
      }

      return response.data.id;
    } catch (error) {
      console.error('Error creating folder in Google Drive:', error);
      throw new Error('Failed to create folder in Google Drive');
    }
  }

  /**
   * Get file metadata
   */
  async getFileMetadata(fileId: string): Promise<drive_v3.Schema$File> {
    try {
      const response = await this.drive.files.get({
        fileId,
        fields: 'id, name, mimeType, webViewLink, webContentLink, size',
      });

      return response.data;
    } catch (error) {
      console.error('Error getting file metadata:', error);
      throw new Error('Failed to get file metadata');
    }
  }
}

export default GoogleDriveService;
