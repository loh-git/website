const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const education = require('./routes/api/edu');
const experience = require('./routes/api/exp');
const personal = require('./routes/api/pers');
const skills = require('./routes/api/skills');


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routing Configuration for Server
app.use('/api/edu',education);
app.use('/api/exp',experience);
app.use('/api/pers',personal);
app.use('/api/skills',skills);

// Production
if(process.env.NODE_ENV === 'production') {
	// Static folder
	app.use(express.static(__dirname+'/public/'));
	// SPA
	app.get(/.*/, (req,res) => res.sendFile(__dirname+"/public/index.html"));
}

// Listen
const port = process.env.PORT || 5000;
app.listen(port, () =>
	console.log(`Server started on port ${port}`)
);
