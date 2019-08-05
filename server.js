const express = require("express");
const path = require('path');
const mysql = require('mysql');
const axios = require("axios");
const bcrypt = require('bcrypt');
const routes = require("./routes");
// const saltRounds = 10;

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//mysql models
// var db = require("./models");


app.listen(8000, () => console.log(`Listening on port ${PORT}`));