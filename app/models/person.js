var mongoose = require('mongoose');

var Person = mongoose.model('Person', { name: String, age: Number});

Person.prototype.toJSON = function(){
	return {id: this._id, name: this.name, age: this.age};
}

module.exports = Person;