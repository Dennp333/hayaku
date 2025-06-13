import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { Result } from '@/app/types/result';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Result;

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
      body.score,
      body.numGenkiLessons,
      body.maxGenkiLesson,
      body.wordTypes.join(','),
      body.forms.join(','),
      body.duration,
      body.showEnglishHints,
      body.displayText
    ]
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Gameplay!A1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    });

    if (body.mistakes.length > 0) {
      const mistakes = body.mistakes.map(m => [
        date,
        m.word.kanji,
        m.word.hiragana,
        m.form,
        m.answerKanji,
        m.answerKana,
      ]);

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Mistakes!A1',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: mistakes,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Google Sheets error:', err);
    return NextResponse.json({ error: 'Failed to write to sheet' }, { status: 500 });
  }
}
