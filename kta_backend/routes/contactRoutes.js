const router = require("express").Router();
const nodemailer = require('nodemailer');

router.post("/sendEmail", async (req, res) => {
  const { name, email, mobileNo, Product, message } = req.body;

  try {
    // Create a transporter using your email service
    let transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: 'rajatmishra9411@gmail.com',
        pass: 'pejgpcfangyfjdtm', // Use App Password if 2FA enabled
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: 'rajatmishra9411@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  } 
});


module.exports = router;
