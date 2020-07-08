var mongoose = require('mongoose');

// Define language model
module.exports = mongoose.model('Education', {
	place: {type: String, default:''},
	start_date: {type: String, default:''},
	end_date: {type: String, default:''},
	course: {type: String, default:''},
	location: {type: String, default:''},
	bullet_points: [{
		type: String
	}]
});