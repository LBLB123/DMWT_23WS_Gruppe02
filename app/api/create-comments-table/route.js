import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE IF NOT EXISTS Comments (
                id SERIAL PRIMARY KEY,
                username varchar(255),
                comment text
            );`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
