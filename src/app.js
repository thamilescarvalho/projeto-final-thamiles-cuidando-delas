require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./config/database');
const indexRouters = require("./routers/indexRouters");
const participantesRouters = require("./routers/participantesRouters")

const app = express()

app.use(express.json())
app.use(cors())

database.connect()

app.use(indexRouters)
app.use("/cadastro", participantesRouters)

module.exports = app;


