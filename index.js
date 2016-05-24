var express = require ("express");
var bodyParser = require ("body-parser");
var mongoose = require('mongoose');
var peopleRouter = require('./app/routes/people_routes');
mongoose.connect('mongodb://192.168.99.100:32769/novo');


var app = express();


app.use(function(req, res, next) {

	res
	.header('Access-Control-Allow-Origin' , '*') 
	.header('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT, DELETE, PATCH')
	.header('Access-Control-Allow-Headers' , 'Content-Type, Accept, Authorization');
	
	if(req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}

});

app.use(bodyParser.json());

app.use(peopleRouter);

//app.route('people')
//  .get(peopleRoutes.index)
//  .post(peopleRoutes.create);

//app.get("/people" , peopleRoutes.index);
//app.post("/people" , peopleRouts.create);

app.listen(3000, function(){
	console.log('nodejs is running at port 3000');
	console.log('mongo is running at 192.168.99.100:32769/novo');

});