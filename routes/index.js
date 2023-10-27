const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/contact", async function(req, res, next) {
  try {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${email}: ${name}`,
      text: message,
    };
  
    await transporter.sendMail(mailOptions);
  
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});


module.exports = router;
