const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');

//# PORTA
const PORT = process.env.PORT || 5000; 

// Express
const app = express();
const router = express.Router();

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Estáticas
app.use(express.static(path.join(__dirname, 'public')));

// EJS - Views (HTML)
app.use(expressLayouts);
app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', path.join(__dirname, 'views', 'partials', 'layout'));


//Rotas
app.use('/', require('./rotas'));


// Servidor WEB
app.listen(PORT, () => {
    console.log(`...Servidor online! Rodando na porta ${PORT}... `)
});