import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
        const result =
            await sql`CREATE TABLE IF NOT EXISTS Comments (
                username varchar(255),
                comment varchar(255),
            );`;
        return response.status(200).json({result});
    } catch (error) {
        return response.status(500).json({error});
    }
}
