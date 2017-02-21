angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newPerson = {};
	$scope.persons = {};
	$scope.selected = false;

	// getting all the data from database
	$http.get('/api/person').success(function(data) {
		$scope.persons = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Function to register an user
	$scope.registerPerson = function() {
		$http.post('/api/person', $scope.newPerson)
		.success(function(data) {
				$scope.newPerson = {}; // Deleting the form data
				$scope.persons = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Function to update the user data
	$scope.updatePerson = function(newPerson) {
		$http.put('/api/person/' + $scope.newPerson._id, $scope.newPerson)
		.success(function(data) {
				$scope.newPerson = {}; // Deleting the form data
				$scope.persons = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Function to delete an user
	$scope.deletePerson = function(newPerson) {
		$http.delete('/api/person/' + $scope.newPerson._id)
		.success(function(data) {
			$scope.newPerson = {};
			$scope.persons = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Function to get the user selected
	$scope.selectPerson = function(person) {
		$scope.newPerson = person;
		$scope.selected = true;
		console.log($scope.newPerson, $scope.selected);
	};
}