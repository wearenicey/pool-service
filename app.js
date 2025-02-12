
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

// dotenv.config({ path: './config/config.env' });



const app = express();

var appp = require('./public/server/main').app;
var baseServer = app;
var distFolder = path.join(process.cwd(), '/public');
appp(baseServer, distFolder).listen(4040, function () {
    console.log("Node Express server listening on http://localhost:4040");
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//govorimo serveru da prikazuje angular aplikaciju ng build sas
app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.get("/kontakt", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/o-nama", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/odrzavanje", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/polumontazni-bazeni", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/ucestala-pitanja", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/betonski-bazeni", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});



app.get("/bazeni-sa-folijom", function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/dodatna-oprema", function (request, response) {
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
      <li>Drzava: ${req.body.select}</li>
      <li>Grad: ${req.body.city}</li>
      </ul>
      <h3>Poruka</h3>

      <p>${req.body.text}</p>




      
     
  `;

    let transporter = nodemailer.createTransport({
        host: 'mail.poolservice.rs',
        port: 465,
        secure: true,
        auth: {
            user: 'mail@poolservice.rs',
            pass: 'mail@mail12',
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: '<mail@poolservice.rs>',
        to: "info@poolservice.rs",

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



// const PORT = process.env.PORT || 5000;

// const server = app.listen(
//     PORT,
//     console.log(
//         `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
//     )
// );
// app.listen(3000, () => console.log("Server started on port ${PORT}"));