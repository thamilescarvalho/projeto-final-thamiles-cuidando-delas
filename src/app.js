require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./config/database');

const app = express()

app.use(express.json())
app.use(cors())

database.connect()

module.exports = app;


