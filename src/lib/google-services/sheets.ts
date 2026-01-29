import { google, sheets_v4 } from 'googleapis';
import { NextRequest } from 'next/server';

interface SheetConfig {
  spreadsheetId: string;
  sheetName: string;
}

class GoogleSheetsService {
  private auth: any;
  private sheets: sheets_v4.Sheets;

  constructor() {
    // Initialize Google Auth with service account credentials
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
  }

  /**
   * Append data to a Google Sheet
   */
  async appendRow(config: SheetConfig, data: any[]): Promise<void> {
    try {
      await this.sheets.spreadsheets.values.append({
        spreadsheetId: config.spreadsheetId,
        range: `${config.sheetName}!A1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [data],
        },
      });
    } catch (error) {
      console.error('Error appending to Google Sheet:', error);
      throw new Error('Failed to save data to Google Sheet');
    }
  }

  /**
   * Get the next row number for a sheet
   */
  async getNextRowNumber(config: SheetConfig): Promise<number> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: config.spreadsheetId,
        range: `${config.sheetName}!A:A`,
      });

      const rows = response.data.values;
      return rows ? rows.length + 1 : 1;
    } catch (error) {
      console.error('Error getting next row number:', error);
      throw new Error('Failed to get next row number');
    }
  }

  /**
   * Create a new sheet if it doesn't exist
   */
  async ensureSheetExists(config: SheetConfig): Promise<void> {
    try {
      // Check if sheet exists by trying to get its values
      await this.sheets.spreadsheets.values.get({
        spreadsheetId: config.spreadsheetId,
        range: `${config.sheetName}!A1`,
      });
    } catch (error: any) {
      if (error.code === 400) {
        // Sheet doesn't exist, create it
        await this.sheets.spreadsheets.batchUpdate({
          spreadsheetId: config.spreadsheetId,
          requestBody: {
            requests: [{
              addSheet: {
                properties: {
                  title: config.sheetName,
                },
              },
            }],
          },
        });
      } else {
        throw error;
      }
    }
  }
}

export default GoogleSheetsService;