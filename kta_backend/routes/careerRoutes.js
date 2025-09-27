const router = require("express").Router();
const nodemailer = require("nodemailer");
const Candidate = require("../modals/Candidate"); // Fixed path
const { RECEIVERS_EMAIL } = require("../constants");

router.post("/add", async (req, res) => {
  const { name, city, email, post, mobileNo, message } = req.body;

  const newCandidate = new Candidate({
    name,
    city,
    email,
    post,
    mobileNo,
    message,
  });

  try {
    const candidateObj = await Candidate.findOne({ email: req.body.email });
    if (candidateObj) {
      return res.status(400).json("Email already exists!");
    }
    const saveCandidte = await newCandidate.save();
    try {
      // Create a transporter using your email service
      let transporter = nodemailer.createTransport({
        service: "gmail", // e.g., 'gmail'
        auth: {
          user: RECEIVERS_EMAIL,
          pass: "jpcgtbzxymulnmnl", // Use App Password if 2FA enabled
        },
      });

      // Email options
      let mailOptions = {
        from: email,
        to: RECEIVERS_EMAIL,
        replyTo: email,
        subject: `${name} applied for ${post} via website`,
        text: `You have received a new job application.

Name: ${name}
City: ${city}
Email: ${email}
Mobile No: ${mobileNo}
Applied For: ${post}

Message:
${message}

-- End of Application --
`,
        html: `
    <h3>New Job Application Received</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>City:</b> ${city}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Mobile No:</b> ${mobileNo}</p>
    <p><b>Applied For:</b> ${post}</p>
    <p><b>Message:</b></p>
    <p>${message}</p>
    <hr/>
    <p><i>This application was submitted via the job portal.</i></p>
  `,
      };

      // Send email
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
    res.status(200).json(saveCandidte);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
