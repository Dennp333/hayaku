import { Problem } from '@/app/types/Problem';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Problem;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        client_id: process.env.GOOGLE_CLIENT_ID,
        project_id: process.env.GOOGLE_PROJECT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;

    const date = new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
    const row = [
      date,
      body.word.kanji,
      body.word.hiragana,
      body.form,
      body.answerKanji,
      body.answerKana,
    ]
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Errors!A1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Google Sheets error:', err);
    return NextResponse.json({ error: 'Failed to write to sheet' }, { status: 500 });
  }
}
