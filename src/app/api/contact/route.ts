import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Server-side validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required (name, email, phone, service, message)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Log the submission to the server console (visible in hosting logs like Vercel, Netlify, PM2, etc.)
    console.log("=========================================");
    console.log("NEW MANUAL LEAD SUBMISSION");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Service requested:", service);
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());
    console.log("=========================================");

    /*
      TIP FOR SCALE:
      You can write this data directly to your Database or trigger an email here.
      Example using Resend or NodeMailer:
      
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey) {
        // Send email notification to your inbox
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: "leads@kreosoftwares.com",
            to: "kreo.pvt.ltd@gmail.com",
            subject: `New Requirement Submitted: ${service}`,
            html: `<p><strong>Name:</strong> ${name}</p>...`
          })
        });
      }
    */

    return NextResponse.json({
      success: true,
      message: "Your requirements have been logged successfully.",
      lead: { name, email, phone, service, message }
    });

  } catch (error: any) {
    console.error("Manual form lead API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
