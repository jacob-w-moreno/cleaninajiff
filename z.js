// var admin = require("firebase-admin");
// admin.initializeApp();
// const cors = require('cors');
// app.use(cors({origin:true}));

const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('*', (request, response) => {
response.send(`${Date.now()}`);
});

exports.date = functions.https.onRequest(app);
// require('dotenv').config();
// nodemailer = require('nodemailer');

//       {GOOGLE_PASS, GOOGLE_EMAIL} = process.env,

// app.use(express.json());

// app.post('/api/email', async(req, res) => {
//   const {name, vehicle, city, email, info} = req.body;

//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: GOOGLE_EMAIL,
//       pass: GOOGLE_PASS
//     }
//   });
//   var mailOptions = {
//     from: 'Me',
//     // to: 'cleaninajiff@gmail.com',
//     to: 'jacob.w.moreno@gmail.com',
//     subject: 'Scheduling Appointment',
//     text: `Congrats! You have a new customer. Name: ${name}. Vehicle: ${vehicle}. City: ${city}. Email: ${email}. Additional Information: ${info}.`
//   }
//   await transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log('ERROR: ' + error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
//   console.log('complete');

//   res.status(200).send("WIN: axios.post('/names')");
// })
