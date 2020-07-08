
//ucitavanje modula za rutiranje, autetifikaciju i rukovanje bazom

const express = require("express");
//moduo za rukovanje putanjama prema fajlovima
const path = require('path');
const dotenv = require('dotenv');
//parsovanje zahteva u json
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
//moduo za postavke aplikacije
var cors = require("cors");

dotenv.config({ path: './config/config.env' });



const app = express();

app.use(cors());

//govorimo serveru da prikazuje angular aplikaciju ng build
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);