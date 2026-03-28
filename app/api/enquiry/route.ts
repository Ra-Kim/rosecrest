import { NextResponse } from "next/server";

const ENQUIRY_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/wlvSa3am4efzf84AIALL/webhook-trigger/5361c8b8-fd64-4049-a436-60ec8512ea1c";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await fetch(ENQUIRY_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: body.firstName,
        Lastname: body.lastName,
        email: body.email,
        phone: body.phone,
        message: body.message,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}