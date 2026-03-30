import { NextResponse } from "next/server";

const ENQUIRY_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/wlvSa3am4efzf84AIALL/webhook-trigger/5361c8b8-fd64-4049-a436-60ec8512ea1c";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const payload = {
      firstname: body.firstName,
      lastname: body.lastName,
      email: body.email,
      phone: body.phone,
      message: body.message,
    };

    console.log("📩 Enquiry payload:", JSON.stringify(payload, null, 2));

    const res = await fetch(ENQUIRY_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseText = await res.text();
    console.log("📬 Enquiry webhook response:", res.status, responseText);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Enquiry webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}