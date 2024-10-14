import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { clientPhone, clientName } = req.body;
    const transporter = nodemailer.createTransport({
      secure: true,
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      phone: clientPhone,
      client_name: clientName,
      subject: "Замовлення з сайту",
      html: `
      <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
          <p style="font-weight: bold;">Ім'я клієнта:</p> <p>${clientName}</p>
          <p style="font-weight: bold;">Номер телефону:</p> <p>+380${clientPhone}</p>
      </div>
  `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
