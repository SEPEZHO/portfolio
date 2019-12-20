const nodemailer = require("nodemailer"); // отлично работает и с Яндекс

const MailSnd = app => {
  app.post("/API/MailSnd", function(req, res) {
    const output = `
<ul>  
  <li>Name: <br />${req.body.name}</li>
  <li>Email: <br />${req.body.email}</li>
  <li>subject: <br />${req.body.subject}</li>
  <li>message: <br />${req.body.message}</li>
</ul>
  <li>IP: <br />${req.connection.remoteAddress}</li>
</ul>
  `;

    let smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sepezho@gmail.com",
        pass: "FeE6ZW6MC$pT"
      }
    });

    const mailOptions = {
      from: req.body.email, // sender address
      to: "sepezho@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      html: output // plain text body
    };

    smtpTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info);
      }
    });

    console.log("\n--------------------------------");
    console.log("\nMail try to send.");
    console.log("\nName: " + req.body.name);
    console.log("\nMail: " + req.body.email);
    console.log("\nSubject: " + req.body.subject);
    console.log("\nMessage: " + req.body.message);
    console.log("\n--------------------------------");
  });
};

module.exports = MailSnd;
