var express = require('express');
var app = express();
var cons = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var databaseUrl = "mongodb://localhost:27017/facility";

MongoClient.connect(databaseUrl, function (err, db) {
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    require('./routes')(app, db);
    app.listen(8082);
    console.log('Express server listening on port 8082');
});

console.log("start db connection");
