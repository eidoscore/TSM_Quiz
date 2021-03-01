const express = require('express')
const http = require('http');
require('dotenv').config();
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var datetime = new Date().toISOString();
    res.send(`<div>Server Time : ${datetime}</div> <div>Environment name : ${process.env.NODE_ENV}</div>`);
})

app.listen(port, () => {
    console.log(`Apps listening at http://localhost:${port}`)
})