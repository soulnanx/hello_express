var express = require ("express");
var bodyParser = require ("body-parser");
var mongoose = require('mongoose');
var peopleRouter = require('./app/routes/people_routes');
mongoose.connect('mongodb://192.168.99.100/novo');


var app = express();
app.use(bodyParser.json());

app.use(peopleRouter);

//app.route('people')
//  .get(peopleRoutes.index)
//  .post(peopleRoutes.create);

//app.get("/people" , peopleRoutes.index);
//app.post("/people" , peopleRouts.create);

app.listen(3000);