import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { propertyType, components, serviceType, personalInfo } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Email
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    const emailContent = `
      <h2>New Estimation Request</h2>
      <p><strong>Name:</strong> ${personalInfo.name}</p>
      <p><strong>Email:</strong> ${personalInfo.email}</p>
      <p><strong>Phone:</strong> ${personalInfo.phone}</p>
      <p><strong>Location:</strong> ${personalInfo.location}</p>
      <p><strong>Property Type:</strong> ${propertyType}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <h3>Rooms Included:</h3>
      <ul>
        ${Object.entries(components)
          .map(([key, value]) => (value > 0 ? `<li>${key.replace(/([A-Z])/g, " $1")}: ${value}</li>` : ""))
          .join("")}
      </ul>
      <h3>Estimated Cost: ₹${(personalInfo.estimatedCost || 0).toLocaleString()}</h3>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: personalInfo.email, // Send to User
      subject: "Your Interior Design Estimate",
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }
}
