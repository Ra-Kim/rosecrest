import { NextResponse } from "next/server";

const BOOKING_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/wlvSa3am4efzf84AIALL/webhook-trigger/dgPKQOjDUCRNWzNxXzVN";

const LEAD_TYPE: Record<string, number> = {
  "level-1": 90,
  "level-2": 90,
  "level-3": 92,
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await fetch(BOOKING_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "Property Type": body.propertyType,
        "Property Value": body.propertyValue,
        "Property Bedrooms": body.bedrooms,
        "Phone": body.phone,
        "Email": body.email,
        "Job Address": body.jobAddress,
        "Job Town": body.jobTown,
        "Job Postcode": body.jobPostcode,
        "First Name": body.firstName,
        "Last Name": body.lastName,
        "How can we help you": body.helpWith || body.surveyType,
        "Lead Type": LEAD_TYPE[body.surveyType] ?? 90,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}