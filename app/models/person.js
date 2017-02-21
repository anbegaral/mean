var mongoose = require('mongoose');

module.exports = mongoose.model('Person', {
	name: String,
	surname: String,
	age: String
});
