import { NextResponse } from "next/server";

// Consolidated company details directly from the updated KREO Brochure PDF
const KREO_KNOWLEDGE_BASE = `
# KREO CORPORATE HANDBOOK

## Who We Are (About Us)
Kreo is a forward-thinking startup committed to delivering high-quality technology solutions, industry-aligned training, and comprehensive career development programs. We bridge the gap between academic education and real-world industry requirements through practical, flexible, and outcome-driven services.
We serve students, graduates, working professionals, educational institutions, and corporate organizations across all academic streams, including IT and Core Engineering.

## Our Core Offerings (Core Streams)
1. IT & Digital Solutions:
   - Web Development (Custom Websites & Web Applications)
   - Business Operating Systems (Kreo OS)
   - Android Application Development

2. Core Engineering Projects:
   - Mechanical Engineering Projects
   - Electrical Engineering Projects
   - Electronics & Communication Engineering (ECE) Projects
   - Civil Engineering Projects

3. Education & Skill Development:
   - Professional Courses & Certification Programs
   - Industry-Oriented Training
   - Skill Development Workshops
   - Soft Skills & Personality Development

4. Student & Career Programs:
   - Academic & Industrial Projects (IT & Core Engineering)
   - Internships (IT & Non-IT)
   - Hackathons & Technical Events
   - Career Guidance & Mentorship
   - Placement Assistance

5. Professional & Personal Growth:
   - Career Development Programs
   - Motivational & Individual Development Sessions
   - Communication, Leadership & Workplace Readiness Training

## Why Choose Kreo?
- Industry-aligned training models.
- Expert trainers from top MNCs.
- Flexible and customized learning programs.
- Consistent quality and delivery standards.
- Equal focus on IT and Non-IT students.
- End-to-end career support — from learning to placement.

## Pricing Policies
Our pricing varies based on:
- The selected domain or technology.
- The type of program (training, internship, project, workshop, or course).
- The duration and level of the session.
- The customization requirements (individual, group, or institutional programs).
We offer competitive, student-friendly, and institutional packages. For exact pricing quotes, we encourage booking a discovery call.

## Contact Information & Address
- Website: www.kreosoftwares.in
- Location Address: R N Shetty Stadium Complex, 1st Floor, KCD College Road, Near Jubilee Circle, Dharwad - 580001 (Karnataka, India)
- Phone Numbers: +91 8123685041, +91 9980411129
- Email Address: kreo.pvt.ltd@gmail.com
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required." }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { 
          error: "GROQ_API_KEY is not configured on the server. Please add it to your environment variables." 
        }, 
        { status: 500 }
      );
    }

    // Prepare system instructions context for the LLM
    const systemInstruction = {
      role: "system",
      content: `You are 'Kreo Assistant', a friendly, professional, and knowledgeable virtual assistant for Kreo (a startup delivering custom software solutions and core engineering career programs based in Hubli-Dharwad, Karnataka).
      
      CORE POLICY:
      You can ONLY answer questions directly related to Kreo, its offerings (IT & digital solutions, core engineering projects, internships, training courses, pricing, contact details, and location), or the provided Knowledge Base.
      If the user asks about ANYTHING else (such as general knowledge, coding/programming help, math problems, other worldly stuff, unrelated companies, news, recipes, etc.), you MUST politely decline to answer. Respond with something like: "I'm sorry, but I can only answer questions related to Kreo and our services. If you have any inquiries about our IT solutions, core engineering projects, or internships, feel free to ask!"

      RULES:
      1. Strictly use the provided details to answer questions.
      2. If you do not know the answer or if the detail is not found in the context, politely suggest they book a discovery call on our website or write to kreo.pvt.ltd@gmail.com.
      3. Do not invent details (no hallucinations). Keep your responses conversational, concise, and helpful.
      4. Refer to the company simply as "Kreo" (not "Kreo Softwares" or "Kreosoftwares").
      
      Kreo Knowledge Base Context:
      ${KREO_KNOWLEDGE_BASE}`
    };

    // Construct request payload matching Groq / OpenAI chat format
    const payload = {
      model: "llama-3.3-70b-versatile", // Powerful model, excellent at strictly following rules and avoiding hallucinations
      messages: [systemInstruction, ...messages],
      temperature: 0.2, // Lower temperature to ensure strict adherence to instructions
      max_tokens: 500,
    };

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API error response:", errText);
      return NextResponse.json({ error: `Groq completions error: ${errText}` }, { status: response.status });
    }

    const result = await response.json();
    const replyText = result.choices[0]?.message?.content || "I couldn't process that query. Please try again.";

    return NextResponse.json({ reply: replyText });

  } catch (error: any) {
    console.error("Chatbot API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
