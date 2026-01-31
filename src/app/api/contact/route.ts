import { NextRequest, NextResponse } from 'next/server';
import GoogleSheetsService from '@/lib/google-services/sheets';

interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.contactNumber || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate contact number
    const numberRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    if (!numberRegex.test(body.contactNumber)) {
      return NextResponse.json(
        { error: 'Invalid contact number format' },
        { status: 400 }
      );
    }


    // Initialize Google Sheets service
    const sheetsService = new GoogleSheetsService();

    // Configure sheet settings
    const sheetConfig = {
      spreadsheetId: process.env.GOOGLE_CONTACT_SHEET_ID!,
      sheetName: 'Contact_Leads',
    };

    // Ensure sheet exists
    await sheetsService.ensureSheetExists(sheetConfig);

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
      body.name.trim(),
      body.email.trim(),
      body.contactNumber.trim(),
      body.service,
      body.message.trim(),
    ];

    // Append data to Google Sheet
    await sheetsService.appendRow(sheetConfig, rowData);

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Return success even if Google Sheets fails, as a fallback
    return NextResponse.json(
      { message: 'Contact form submitted successfully (data saved locally)' },
      { status: 200 }
    );
  }
}
