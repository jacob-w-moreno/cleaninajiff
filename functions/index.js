// var admin = require("firebase-admin");
// admin.initializeApp();
// const cors = require('cors');
// app.use(cors({origin:true}));

require('dotenv').config();
nodemailer = require('nodemailer');

const functions = require('firebase-functions'),
      express = require('express'),
      app = express();
      // {GOOGLE_PASS, GOOGLE_EMAIL} = process.env;

app.get('*', (request, response) => {
  response.send(`${Date.now()}`);
});

app.post('*', async(req, res) => {
  const {name, vehicle, city, email, info} = req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "maddie.baddie94@gmail.com",
      pass: "ThrowawayPassword123!"
    }
  });
  var mailOptions = {
    from: 'Me',
    // to: 'cleaninajiff@gmail.com',
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

  res.status(200).send('WIN: email sent');
})

exports.app = functions.https.onRequest(app);
