import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: `tecrdx@gmail.com`, 
        pass: `rfkmjppufzdxonjg`, 
      },
    });

    const mailOptions = {
      from: email, 
      // to: 'tecrdx@gmail.com', 
      to: 'aaron@trailblazer.team', 
      subject: `Message from ${name}`, 
      text: message, 
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`, // HTML body
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
