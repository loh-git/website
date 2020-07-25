const express = require('express');
const router = express.Router();

// Get Certifications
router.get('/', async (req,res) => {
	var fs = require('fs');
	var obj;
	fs.readFile(__dirname + '/../json/certs.json', 'utf8', function(err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.send(JSON.stringify(obj));
	})
});
module.exports = router;

