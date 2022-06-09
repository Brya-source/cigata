// Librerias/modulos
const express = require('express');
const morgan = require('morgan');
const { hostname } = require('os');

// Inicializacion(es)
const app = express();

//Configuraciones
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));

//variables globales

//rutas

//public

//start server
app.listen(app.get('port'),()=>{
    console.log('server listening on port', app.get('port'));
});