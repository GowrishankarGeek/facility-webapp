var express = require('express')
, app = express()
, cons = require('consolidate')
, routes = require('./routes');


app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.get("/", function(req,res))
routes(app);

app.listen(8082);
console.log('Express server listening on port 8082');
