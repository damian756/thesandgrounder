import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const subjectLine = subject
      ? `[Sandgrounder] ${subject}: ${name}`
      : `[Sandgrounder] Message from ${name}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "The Sandgrounder <contact@thesandgrounder.com>",
        to: "damian@churchtownmedia.co.uk",
        reply_to: email,
        subject: subjectLine,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        `,
        text: `Name: ${name}\nEmail: ${email}\n${subject ? `Subject: ${subject}\n` : ""}Message:\n${message}`,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend contact error:", text);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
