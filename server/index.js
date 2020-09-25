require('dotenv').config();
nodemailer = require('nodemailer');

const express = require('express'),
      {SERVER_PORT, GOOGLE_PASS, GOOGLE_EMAIL} = process.env,
      app = express();

app.use(express.json());

app.post('/email', async(req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GOOGLE_EMAIL,
      pass: GOOGLE_PASS
    }
  });
  var mailOptions = {
    from: 'Better Inc.',
    to: 'jacob.w.moreno@gmail.com',
    subject: 'Scheduling Appointment',
    text: `Hey! If you're reading this, it's because Nodemailer works! Get wrecked!`
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.status(200).send("WIN: axios.post('/names')");
})

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`))
