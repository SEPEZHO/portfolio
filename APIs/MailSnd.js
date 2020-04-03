const nodemailer = require("nodemailer");
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
        pass: "PASS"
      }
    });
    const mailOptions = {
      from: req.body.email,
      to: "sepezho@gmail.com",
      subject: req.body.subject,
      html: output
    };

    smtpTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({
          status: false
        });
      } else {
        res.send({
          status: true
        });
      }
    });
  });
};

module.exports = MailSnd;
