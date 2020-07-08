angular.module('EducationService', []).factory('Edu', ['$http', function($http) {

	return {
		// Call to get all
		get : function() {
			return $http.get('/api/edu');
		},

		// These will work when more API routes are defined on the Node side of things
		// Call to POST and create
		create : function(data) {
			return $http.post('/api/edu', data);
		},

		// Call to DELETE
		delete : function(id) {
			return $http.delete('/api/edu/' + id);
		}
	};

}]);