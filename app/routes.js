// Education Routing
var Edu = require('./models/Education');

module.exports = function(app) {
	// ======== SERVER ROUTES  ========
	app.get('/api/edu', function(req, res) {
		// Use mongoose to get all education entries
		Edu.find(function(err, education) {
			if(err)
				res.send(err);
			res.json(education);
		});
	});
	// ======== FRONT-END ROUTES  ========
	app.get('/', function(req, res) {
		res.render('main'); // Load public index file
	});
};