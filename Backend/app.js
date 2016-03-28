
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

// Connection URL
var url = 'URL_CONEXION';

/* GET Colección */
app.get("/api/:coleccion", function (req, res) {
    
    var conectar = false;
    var nombreColeccion = req.params.coleccion;
    
    switch (nombreColeccion) {

        case "autos":
        case "animales":
        case "musica":
        case "postres":
        case "turismo":
            conectar = true;
            break;
    }
    
    if (conectar) {

        // Use connect method to connect to the Server
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected correctly to server");
            
            // Se obtienen los documentos de una colección
            var collection = db.collection(nombreColeccion);
            
            // Se serializa en un array
            collection.find({}).toArray(function (err, docs) {
                assert.equal(err, null);
                
                // se devuelven los documentos
                res.status(200).send(docs);
            });

        //db.close();
        });
    }
    else {
        res.status(404).send({ "error": "colección no encontrada" });
    }
    

});



http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
