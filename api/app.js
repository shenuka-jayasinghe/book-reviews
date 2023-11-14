const express = require("express");
const app = express()
const db = require('../db/connection')
app.use(express.json())
const cors = require('cors');
const { getBooks } = require("./controllers/book.controller");
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/book', getBooks )

module.exports = app