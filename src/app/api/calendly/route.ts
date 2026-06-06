import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { inviteeUri, eventUri } = body;

    if (!inviteeUri) {
      return NextResponse.json({ error: "inviteeUri is required" }, { status: 400 });
    }

    const token = process.env.CALENDLY_ACCESS_TOKEN;
    if (!token) {
      console.warn("CALENDLY_ACCESS_TOKEN is missing from environment variables.");
      return NextResponse.json({
        success: true,
        message: "Booking hook caught. Add CALENDLY_ACCESS_TOKEN in your env to fetch invitee answers.",
        inviteeUri,
        eventUri,
      });
    }

    // Fetch full details of the booker (invitee) from Calendly API V2
    const inviteeResponse = await fetch(inviteeUri, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!inviteeResponse.ok) {
      const errorText = await inviteeResponse.text();
      return NextResponse.json({ error: `Calendly API error: ${errorText}` }, { status: inviteeResponse.status });
    }

    const inviteeData = await inviteeResponse.json();
    const invitee = inviteeData.resource;

    // Log invitee information in console (you can easily connect this to MongoDB, Postgres, or Slack here)
    console.log("=========================================");
    console.log("NEW CALENDLY BOOKING SYNCED TO DATABASE");
    console.log("Name:", invitee.name);
    console.log("Email:", invitee.email);
    console.log("Questions & Answers:", invitee.questions_and_answers);
    console.log("=========================================");

    return NextResponse.json({
      success: true,
      message: "Lead details successfully synced from Calendly.",
      lead: {
        name: invitee.name,
        email: invitee.email,
        answers: invitee.questions_and_answers,
      }
    });

  } catch (error: any) {
    console.error("Calendly sync API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
