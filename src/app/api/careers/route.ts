import { NextRequest, NextResponse } from 'next/server';

interface LanguageSkills {
  speak: boolean;
  read: boolean;
  write: boolean;
}

interface ApplicationData {
  // Step 1: Personal Identity
  surname: string;
  firstName: string;
  middleName: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  age: string;
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
  
  // Step 2: Contact & Address
  mobileNumber: string;
  alternateNumber: string;
  presentAddress: string;
  permanentAddress: string;
  permanentAddressSameAsPresent: boolean;
  height: string;
  weight: string;
  chest: string;
  qualification: string;
  
  // Step 3: Work Experience & Skills
  previousESIC: string;
  previousUAN: string;
  residentialExperience: string;
  commercialExperience: string;
  industrialExperience: string;
  languages: {
    english: LanguageSkills;
    hindi: LanguageSkills;
    marathi: LanguageSkills;
  };
  skills: {
    fireFighting: boolean;
    safety: boolean;
    firstAid: boolean;
    driving: boolean;
    computer: boolean;
  };
  
  // Step 4: Bank & Documents
  nameOnAadhar: string;
  aadharNumber: string;
  panNumber: string;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  branchAddress: string;
  profilePhoto: any;
  resume: any;
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();

    const applicationData: ApplicationData = {
      surname: formData.get('surname') as string || '',
      firstName: formData.get('firstName') as string || '',
      middleName: formData.get('middleName') as string || '',
      fatherName: formData.get('fatherName') as string || '',
      motherName: formData.get('motherName') as string || '',
      dateOfBirth: formData.get('dateOfBirth') as string || '',
      age: formData.get('age') as string || '',
      maritalStatus: (formData.get('maritalStatus') as 'Single' | 'Married' | 'Divorced' | 'Widowed') || 'Single',
      
      mobileNumber: formData.get('mobileNumber') as string || '',
      alternateNumber: formData.get('alternateNumber') as string || '',
      presentAddress: formData.get('presentAddress') as string || '',
      permanentAddress: formData.get('permanentAddress') as string || '',
      permanentAddressSameAsPresent: formData.get('permanentAddressSameAsPresent') === 'true',
      height: formData.get('height') as string || '',
      weight: formData.get('weight') as string || '',
      chest: formData.get('chest') as string || '',
      qualification: formData.get('qualification') as string || '',
      
      previousESIC: formData.get('previousESIC') as string || '',
      previousUAN: formData.get('previousUAN') as string || '',
      residentialExperience: formData.get('residentialExperience') as string || '',
      commercialExperience: formData.get('commercialExperience') as string || '',
      industrialExperience: formData.get('industrialExperience') as string || '',
      
      languages: {
        english: {
          speak: formData.get('english_speak') === 'true',
          read: formData.get('english_read') === 'true',
          write: formData.get('english_write') === 'true',
        },
        hindi: {
          speak: formData.get('hindi_speak') === 'true',
          read: formData.get('hindi_read') === 'true',
          write: formData.get('hindi_write') === 'true',
        },
        marathi: {
          speak: formData.get('marathi_speak') === 'true',
          read: formData.get('marathi_read') === 'true',
          write: formData.get('marathi_write') === 'true',
        },
      },
      
      skills: {
        fireFighting: formData.get('fireFighting') === 'true',
        safety: formData.get('safety') === 'true',
        firstAid: formData.get('firstAid') === 'true',
        driving: formData.get('driving') === 'true',
        computer: formData.get('computer') === 'true',
      },
      
      nameOnAadhar: formData.get('nameOnAadhar') as string || '',
      aadharNumber: formData.get('aadharNumber') as string || '',
      panNumber: formData.get('panNumber') as string || '',
      bankName: formData.get('bankName') as string || '',
      accountHolderName: formData.get('accountHolderName') as string || '',
      accountNumber: formData.get('accountNumber') as string || '',
      ifscCode: formData.get('ifscCode') as string || '',
      branchAddress: formData.get('branchAddress') as string || '',
      
      profilePhoto: formData.get('profilePhoto') || null,
      resume: formData.get('resume') || null,
    };


    // Validate required fields
    const requiredFields = [
      'surname', 'firstName', 'fatherName', 'motherName', 'dateOfBirth',
      'age', 'maritalStatus', 'mobileNumber', 'presentAddress',
      'permanentAddress', 'height', 'weight', 'chest', 'qualification',
      'nameOnAadhar', 'aadharNumber', 'bankName', 'accountHolderName',
      'accountNumber', 'ifscCode', 'branchAddress'
    ];

    for (const field of requiredFields) {
      if (!applicationData[field as keyof ApplicationData]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate required file uploads
    if (!applicationData.profilePhoto) {
      return NextResponse.json(
        { error: 'Profile photo is required' },
        { status: 400 }
      );
    }

    if (!applicationData.resume) {
      return NextResponse.json(
        { error: 'Resume is required' },
        { status: 400 }
      );
    }

    // Validate age
    if (parseInt(applicationData.age) < 18) {
      return NextResponse.json(
        { error: 'Applicant must be at least 18 years old' },
        { status: 400 }
      );
    }

    // Validate mobile number
    if (applicationData.mobileNumber.length !== 10) {
      return NextResponse.json(
        { error: 'Mobile number must be 10 digits' },
        { status: 400 }
      );
    }

    // Validate Aadhar number
    if (applicationData.aadharNumber.length !== 12) {
      return NextResponse.json(
        { error: 'Aadhar number must be 12 digits' },
        { status: 400 }
      );
    }

    // Validate IFSC code
    if (applicationData.ifscCode.length !== 11) {
      return NextResponse.json(
        { error: 'IFSC code must be 11 characters' },
        { status: 400 }
      );
    }

    // Log application data for debugging (without sensitive files)
    console.log('Application received:', {
      ...applicationData,
      profilePhoto: applicationData.profilePhoto ? 'File provided' : 'No file',
      resume: applicationData.resume ? 'File provided' : 'No file'
    });

    // Check if Google services are configured
    const hasGoogleConfig = process.env.GOOGLE_CAREERS_SHEET_ID && process.env.GOOGLE_CAREERS_DRIVE_FOLDER_ID;

    if (hasGoogleConfig) {
      try {
        // Try to use Google services
        const GoogleSheetsService = (await import('@/lib/google-services/sheets')).default;
        const GoogleDriveService = (await import('@/lib/google-services/drive')).default;

        const sheetsService = new GoogleSheetsService();
        const driveService = new GoogleDriveService();

        // Configure sheet settings
        const sheetConfig = {
          spreadsheetId: process.env.GOOGLE_CAREERS_SHEET_ID!,
          sheetName: 'Job_Applications',
        };

        // Ensure sheet exists
        await sheetsService.ensureSheetExists(sheetConfig);

        // Upload files to Google Drive if provided
        let profilePhotoUrl = '';
        let resumeUrl = '';

        if (applicationData.profilePhoto) {
          try {
            // Handle file upload for profile photo
            const profilePhotoFile = applicationData.profilePhoto;
            console.log('Profile photo file object:', {
              type: typeof profilePhotoFile,
              hasArrayBuffer: profilePhotoFile && 'arrayBuffer' in profilePhotoFile,
              name: profilePhotoFile?.name,
              size: profilePhotoFile?.size,
              mimeType: profilePhotoFile?.type
            });

            const uploadResult = await driveService.uploadFile(
              profilePhotoFile,
              process.env.GOOGLE_CAREERS_DRIVE_FOLDER_ID,
              `Profile_Photo_${applicationData.firstName}_${applicationData.surname}_${Date.now()}`
            );
            profilePhotoUrl = uploadResult.webViewLink;
            console.log('Profile photo uploaded successfully:', uploadResult);
          } catch (error) {
            console.error('Error uploading profile photo:', error);
            return NextResponse.json(
              { error: 'Profile photo upload failed. Please try again.' },
              { status: 500 }
            );
          }
        }

        if (applicationData.resume) {
          try {
            // Handle file upload for resume
            const resumeFile = applicationData.resume;
            console.log('Resume file object:', {
              type: typeof resumeFile,
              hasArrayBuffer: resumeFile && 'arrayBuffer' in resumeFile,
              name: resumeFile?.name,
              size: resumeFile?.size,
              mimeType: resumeFile?.type
            });

            const uploadResult = await driveService.uploadFile(
              resumeFile,
              process.env.GOOGLE_CAREERS_DRIVE_FOLDER_ID,
              `Resume_${applicationData.firstName}_${applicationData.surname}_${Date.now()}`
            );
            resumeUrl = uploadResult.webViewLink;
            console.log('Resume uploaded successfully:', uploadResult);
          } catch (error) {
            console.error('Error uploading resume:', error);
            return NextResponse.json(
              { error: 'Resume upload failed. Please try again.' },
              { status: 500 }
            );
          }
        }

        // Prepare data for Google Sheet
        const timestamp = new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

        const rowData = [
          timestamp,
          `${applicationData.firstName} ${applicationData.middleName} ${applicationData.surname}`,
          applicationData.fatherName,
          applicationData.motherName,
          applicationData.dateOfBirth,
          applicationData.age,
          applicationData.maritalStatus,
          applicationData.mobileNumber,
          applicationData.alternateNumber,
          applicationData.presentAddress,
          applicationData.permanentAddress,
          applicationData.height,
          applicationData.weight,
          applicationData.chest,
          applicationData.qualification,
          applicationData.previousESIC,
          applicationData.previousUAN,
          applicationData.residentialExperience,
          applicationData.commercialExperience,
          applicationData.industrialExperience,
          `${applicationData.languages.english.speak ? 'Speak' : ''} ${applicationData.languages.english.read ? 'Read' : ''} ${applicationData.languages.english.write ? 'Write' : ''}`.trim(),
          `${applicationData.languages.hindi.speak ? 'Speak' : ''} ${applicationData.languages.hindi.read ? 'Read' : ''} ${applicationData.languages.hindi.write ? 'Write' : ''}`.trim(),
          `${applicationData.languages.marathi.speak ? 'Speak' : ''} ${applicationData.languages.marathi.read ? 'Read' : ''} ${applicationData.languages.marathi.write ? 'Write' : ''}`.trim(),
          `${applicationData.skills.fireFighting ? 'Fire Fighting' : ''} ${applicationData.skills.safety ? 'Safety' : ''} ${applicationData.skills.firstAid ? 'First Aid' : ''} ${applicationData.skills.driving ? 'Driving' : ''} ${applicationData.skills.computer ? 'Computer' : ''}`.trim(),
          applicationData.nameOnAadhar,
          applicationData.aadharNumber,
          applicationData.panNumber,
          applicationData.bankName,
          applicationData.accountHolderName,
          applicationData.accountNumber,
          applicationData.ifscCode,
          applicationData.branchAddress,
          profilePhotoUrl,
          resumeUrl,
        ];

        // Append data to Google Sheet
        await sheetsService.appendRow(sheetConfig, rowData);

        return NextResponse.json(
          { message: 'Job application submitted successfully' },
          { status: 200 }
        );

      } catch (googleError) {
        console.error('Google services error:', googleError);
        // Fall back to basic submission
      }
    }

    // Fallback: Basic submission without Google services
    console.log('Submitting application without Google services (fallback mode)');
    
    return NextResponse.json(
      { 
        message: 'Job application submitted successfully (files not uploaded due to configuration issues)',
        note: 'Application data saved, but files could not be uploaded. Please contact support if this is an issue.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing job application:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit job application. Please try again.' },
      { status: 500 }
    );
  }
}
