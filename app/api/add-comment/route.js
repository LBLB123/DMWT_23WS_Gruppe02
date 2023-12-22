import { sql } from '@vercel/postgres';


export default async function handler(request, response) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('usernameName');
    const comment = searchParams.get('commentName');

    try {
        const {usernameName, commentName} = JSON.pars(request.body);
        if (!usernameName || !commentName) throw new Error('Username and comment required');
        await sql`INSERT INTO Comments (username, comment) VALUES (${username}, ${comment});`;
    } catch (error) {
        return response.status(200).json(prts.rows);
    }

}
