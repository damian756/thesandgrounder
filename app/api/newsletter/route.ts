import { NextResponse } from "next/server";

async function getAudienceId(apiKey: string): Promise<string | null> {
  const res = await fetch("https://api.resend.com/audiences", {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.data?.[0]?.id ?? null;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const audienceId = await getAudienceId(apiKey);
    if (!audienceId) {
      console.error("No Resend audience found");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
          data: { source: "sandgrounder" },
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", text);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
