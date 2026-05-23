import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { queVendes, instagram, telefono, mensaje } = body;

    await resend.emails.send({
      from: "Cohete Agency <onboarding@resend.dev>",
      to: process.env.TO_EMAIL as string, // 👈 your email here
      subject: "Cohete Contact Form Submission",
      html: `
        <h2>New Lead</h2>
        <p><strong>Qué vendes:</strong> ${queVendes}</p>
        <p><strong>Instagram:</strong> ${instagram}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
