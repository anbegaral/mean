var Person = require('../models/person.js');

// Getting all the data from th database
exports.getPerson = function (req, res){
	Person.find(
		function(err, person) {
			if (err)
				res.send(err)
					res.json(person); // returning the user in json		
				}
			);
}

// Saving an user object in database
exports.setPerson = function(req, res) {

		// creating the object
		Person.create(
			{
                name : req.body.name,
                surname: req.body.surname,
                age: req.body.age
            },
			function(err, person) {
				if (err)
					res.send(err);
				// after creating it's getting all the objects
				Person.find(function(err, person) {
				 	if (err)
				 		res.send(err)
				 	res.json(person);
				});
			});

	}

// Modifying an object
exports.updatePerson = function(req, res){
	Person.update( {_id : req.params.person_id},
					{$set:{
                        name : req.body.name,
                        surname : req.body.surname, 
                        age: req.body.age}
                    }, 
					function(err, person) {
						if (err)
							res.send(err);
				// After modifying it's getting all the objects
				Person.find(function(err, person) {
				 	if (err)
				 		res.send(err)
				 	res.json(person);
				});
			});
	}

// Deleting an user object from database
exports.removePerson = function(req, res) {
	Person.remove({_id : req.params.person_id}, function(err, person) {
		if (err)
			res.send(err);
			// After deleting it's getting the remaining objects
			Person.find(function(err, person) {
				if (err)
					res.send(err)
				res.json(person);
			});
		});
}