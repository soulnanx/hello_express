var router = require('express').Router();
var Person = require('../models/person');


router.route('/people')
	.get((req, res) => {
		Person.find({}, (err, people) => {
			if (err){
				res.status(500).send("error");
			} else {
				res.status(200).send(people);
			}
		});
	})
	.post((req, res) => {
		var person = new Person(req.body);
		person.save((err) => {
			if (err){
				res.status(500).send("error");
			} else {
				res.status(201).send("saved");
			}
		});
	});

router.route('/people/:id')
  .get((req, res) => {
	  	Person.findOne({ _id: req.params.id }, (err, person) => {
	  		if (err)
	  			res.status(500).send('deu pau');
	  		else
	  			res.status(200).send(person);
	  	});
   })
  .delete((req, res) => {
	  	Person.remove({ _id: req.params.id }, (err) => {
	  		if (err)
	  			res.status(500).send('deu pau');
	  		else
	  			res.status(204).send('removido com sucesso');
	  	});
   });

module.exports = router;

/*module.exports = {

	index(req, res) {
		Person.find({}, function(err, people){
			if (err){
				res.status(500).send("error");
			} else {
				res.status(200).send(people);
			}
		});
	},

	create(req, res) {
		var person = new Person(req.body);
		person.save(function(err){
			if (err){
				res.status(500).send("error");
			} else {
				res.status(201).send("saved");
			}
		});
	}
}*/