var Person = require('../models/person.js');
var Controller = require ('./controller');

module.exports = function(app) {

	// get all the Persons
	app.get('/api/person', Controller.getPerson);
	// Create a new Person
	app.post('/api/person', Controller.setPerson);
	// Update one person
	app.put('/api/person/:person_id', Controller.updatePerson);
	// Delete one Person
	app.delete('/api/person/:person_id', Controller.removePerson);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./views/index.html'); // Carga única de la vista
	});
};