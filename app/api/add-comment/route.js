import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    const comment = searchParams.get('comment');

    try {
        if (!username || !comment) throw new Error('Username and comment required');
        await sql`INSERT INTO Comments (username, comment) VALUES (${username}, ${comment});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const comments = await sql`SELECT * FROM Comments;`;
    return NextResponse.json({ comments }, { status: 200 });
}
