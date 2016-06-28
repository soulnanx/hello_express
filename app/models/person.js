var mongoose = require('mongoose');

var Person = mongoose.model('Person', { name: String, age: Number, gender: String});

Person.prototype.toJSON = function(){
	return {id: this._id, name: this.name, age: this.age, gender: this.gender};
}

module.exports = Person;
