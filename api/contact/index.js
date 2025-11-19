import { createClient } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const client = createClient({
      connectionString: process.env.POSTGRES_URL,
    });

    await client.connect();

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    await client.sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${name}, ${email}, ${message});
    `;

    return res.status(200).json({ success: true, message: "Message received!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
}