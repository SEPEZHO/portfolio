const MailSnd = app => {
  app.post("/API/MailSnd", function(req, res) {
    console.log('\n--------------------------------')
    console.log('\nMail try to send.')
    console.log('\nName: ' + req.body.name)
    console.log('\nMail: ' + req.body.email)
    console.log('\nSubject: ' + req.body.subject)
    console.log('\nMessage: ' + req.body.message)
    console.log('\n--------------------------------')
  });
};

module.exports = MailSnd;
