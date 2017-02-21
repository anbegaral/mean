// Inicialización
var express  = require('express');
var app      = express(); 
var bodyParser = require('body-parser');
var methodOverride = require('method-override');				// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 3001; 			// Cogemos el puerto 8080

// Configuracion
mongoose.connect('mongodb://localhost:27018/GymUsers'); 	// Hacemos la conexión a la base de datos de Mongo con nombre "MeanExample"


app.use(express.static(__dirname + '/views')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



// Cargamos los endpoints
require('./routes/routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);