var express = require('express')
    , app = express()
    , cons = require('consolidate');

var MongoClient = require('mongodb').MongoClient;
var databaseUrl = "mongodb://localhost:27017/facility";

MongoClient.connect(databaseUrl, function (err, db) {
    var users = db.collection("users");
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());

    app.get("/", function (req, res) {
        res.render("index", {
            name: "Kia",
            info: {
                age: 1
            }
        });
    });

    app.post("/", function (req, res) {
        console.log(req.body.name);
        users.save({name:req.body.name}, function(err, user) {
            console.log(user);
            res.render("index", {
                name: req.body.name,
                info: {
                    age: 1
                }
            });
        });
    });

    app.listen(8082);
    console.log('Express server listening on port 8082');

});

console.log("start db connection");