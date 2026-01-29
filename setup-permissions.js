#!/usr/bin/env node

/**
 * Setup Permissions Script
 * 
 * This script helps verify that the service account has proper permissions
 * to access the Google Sheets and Drive folder.
 * 
 * Run this script after setting up the environment variables.
 */

const { google } = require('googleapis');
const fs = require('fs');

// Load environment variables
require('dotenv').config();

async function setupPermissions() {
  console.log('🚀 Setting up Google Sheets and Drive permissions...\n');

  try {
    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const drive = google.drive({ version: 'v3', auth });

    console.log('✅ Authentication successful\n');

    // Test Contact Sheet Access
    console.log('📋 Testing Contact Sheet access...');
    try {
      const contactSheetResponse = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_CONTACT_SHEET_ID,
      });
      console.log(`✅ Contact Sheet: ${contactSheetResponse.data.properties.title}`);
    } catch (error) {
      console.log('❌ Contact Sheet access failed');
      console.log('   Please share the sheet with:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    }

    // Test Careers Sheet Access
    console.log('📋 Testing Careers Sheet access...');
    try {
      const careersSheetResponse = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_CAREERS_SHEET_ID,
      });
      console.log(`✅ Careers Sheet: ${careersSheetResponse.data.properties.title}`);
    } catch (error) {
      console.log('❌ Careers Sheet access failed');
      console.log('   Please share the sheet with:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    }

    // Test Drive Folder Access
    console.log('📁 Testing Drive Folder access...');
    try {
      const driveFolderResponse = await drive.files.get({
        fileId: process.env.GOOGLE_CAREERS_DRIVE_FOLDER_ID,
        fields: 'id, name, mimeType',
      });
      console.log(`✅ Drive Folder: ${driveFolderResponse.data.name}`);
    } catch (error) {
      console.log('❌ Drive Folder access failed');
      console.log('   Please share the folder with:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    }

    console.log('\n🎉 Permission setup complete!');
    console.log('\n📋 Next steps:');
    console.log('1. If any tests failed, share the respective resources with the service account');
    console.log('2. Start your development server: npm run dev');
    console.log('3. Test the Contact Form and Careers Form');
    console.log('4. Check that data appears in your Google Sheets');
    console.log('5. Verify files are uploaded to your Drive folder');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Ensure .env.local file exists with correct credentials');
    console.log('2. Verify Google Cloud project has Sheets and Drive APIs enabled');
    console.log('3. Check that the service account email is correct');
  }
}

// Run the setup
setupPermissions();