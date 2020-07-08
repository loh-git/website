// Main File - Runs NodeJS Server

// ========== MODULES ==========
var express = require('express');
var app = express();
var aux = require('./auxillary.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
// ========== CONFIGURATION ==========
// Configure database
var db = require('./config/db');
// Set port
var port = process.env.PORT || 8080;

// Connect to MongoDB Database
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(db.url);

app.set('view engine', 'pug');
app.set('views', './public/views');

// Get data from POST
// Parse application/json
app.use(bodyParser.json());
// Parse application/bnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
// Override X-HTTP-Method-Override header in the request (Simulate DELETE/PUT)
app.use(methodOverride('X-HTTP-Method-Override'));
// Set static file location
app.use(express.static(__dirname + '/public'));


// ========== ROUTES =========
// Route configuration
require('./app/routes')(app);


// ========== START SERVER ==========
app.listen(port);
aux.start(port, mongoose.connection);
// Expose application
exports = module.exports = app;