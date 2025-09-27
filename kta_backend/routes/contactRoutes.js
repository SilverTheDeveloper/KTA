const router = require("express").Router();
const nodemailer = require('nodemailer');
const { RECEIVERS_EMAIL } = require("../constants");

router.post("/sendEmail", async (req, res) => {
  const { name, email, mobileNo, Product, message, BusinessType } = req.body;

  try {
    // Create a transporter using your email service
    let transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: RECEIVERS_EMAIL,
        pass: 'jpcgtbzxymulnmnl', // Use App Password if 2FA enabled
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: RECEIVERS_EMAIL,
      subject: `${name} contacted you via your website`,
      Email:`${email}`,
      MobileNo:`${mobileNo}`,
      product: `${Product}`,
      text: `Name: ${name}\nEmail: ${email}\nMobile No: ${mobileNo}\nBusiness Type: ${BusinessType}\nProduct: ${Product}\nMessage: ${message}`,
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
