const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
require('dotenv').config(); //necessário para usar parâmetros do doc .env, podes colocar em uma variável ou não.

//# PORTA
const PORT = process.env.PORT || 5004;
const port_https = process.env.PORT_HTTPS | 5004;
const path_cert = process.env.PATH_CERT;
console.log(path_cert);
console.log(port_https);
console.log(PORT);


const httpsOptions = {
    key: fs.readFileSync(`${path_cert}/privkey1.pem`),
    cert: fs.readFileSync(`${path_cert}/cert1.pem`),
    ca: fs.readFileSync(`${path_cert}/certca1.pem`),
    passphrase: '7154' /*readFileSync(`${path_cert}/phrase1.pem`)*/
};

//var httpsServer = https.createServer(httpsOptions, app);

// Express
const app = express();
const router = express.Router();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Estáticas
app.use(express.static(path.join(__dirname, 'public')));

// EJS - Views (HTML)
app.use(expressLayouts);
app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', path.join(__dirname, 'views', 'partials', 'layout'));



//httpsServer.listen(port_https);

//Rotas
app.use('/', require('./rotas'));
app.use('/login', require('./rotas'));


//Servidor WEB
app.listen(PORT, () => {
    console.log(`...Servidor online! Rodando na porta ${PORT}... `)
});