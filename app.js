
//ucitavanje modula za rutiranje, autetifikaciju i rukovanje bazom

const express = require("express");
//moduo za rukovanje putanjama prema fajlovima
const path = require('path');
const dotenv = require('dotenv');
//parsovanje zahteva u json
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
//moduo za postavke aplikacije
const cors = require("cors");

dotenv.config({ path: './config/config.env' });



const app = express();

app.use(cors());


//govorimo serveru da prikazuje angular aplikaciju ng build
app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.get("/contact", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/polumontazni-bazeni", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});
//staticki direktorijum bice ./public
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/contact", (req, res) => {
    const contactOutput = `
  <p> Imate novu poruku </p>
  <h3> Detalji poruke</h3>
  <ul>
      <li>Ime i prezime: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Broj telefona: ${req.body.telefon}</li>
      <li>Usluga: ${req.body.website}</li>
      <li>Vreme: ${req.body.gender}</li>
      <li>Drzava: ${req.body.select}</li>
      <li>Grad: ${req.body.city}</li>
      </ul>
      <h3>Poruka</h3>

      <p>${req.body.text}</p>




      
     
  `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ttestiranje1@gmail.com',
            pass: 'proba12345' // naturally, replace both with your real credentials or an application-specific password
        },
        tls: {
            rejectUnauthorized: false

        }
    })

    let mailOptions = {
        from: '<ttestiranje1@gmail.com>',
        to: "zarko.stevanovic092@gmail.com",

        subject: "KONTAKT",
        html: contactOutput,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({
                message: 'Poruka je poslata'

            })
        }
    });
});


const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
