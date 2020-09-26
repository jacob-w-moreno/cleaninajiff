require('dotenv').config();
nodemailer = require('nodemailer');

const express = require('express'),
      {SERVER_PORT, GOOGLE_PASS, GOOGLE_EMAIL} = process.env,
      app = express();

app.use(express.json());

app.post('/api/email', async(req, res) => {
  const {name, vehicle, city, email, info} = req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GOOGLE_EMAIL,
      pass: GOOGLE_PASS
    }
  });
  var mailOptions = {
    from: 'Me',
    to: 'jacob.w.moreno@gmail.com',
    subject: 'Scheduling Appointment',
    text: `Congrats! You have a new customer. Name: ${name}. Vehicle: ${vehicle}. City: ${city}. Email: ${email}. Additional Information: ${info}.`
  }
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('ERROR: ' + error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  console.log('complete');

  res.status(200).send("WIN: axios.post('/names')");
})

app.listen(SERVER_PORT, () => console.log(`running: ${SERVER_PORT}`))
