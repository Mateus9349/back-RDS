const fs = require('fs');
const https = require('https');

const express = require('express');
const routes = require('./routes')

const app = express();

const port = 8000;

routes(app)

app.listen(port, ()=> console.log(`O servidor esta rodando na porta ${port}`));

https.createServer({
    cert: fs.readFileSync('api/SSL/certificate.crt'),
    key: fs.readFileSync('api/SSL/private.key'),
    ca: fs.readFileSync('api/SSL/ca_bundle.crt')
}, app).listen(8001, ()=> console.log('Rodando em https'));



module.exports = app