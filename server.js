const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users')

const app = express();

// BodyParser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Database configuration file
const db = require('./config/keys').mongoURI;
const pl = require('./debugging');
// Connect to MongoDB
mongoose.connect(
  db,
  {useNewUrlParser: true}
)
.then(() => pl.success('MongoDB connected'))
.catch(err => pl.error(err));

// Passport Middleware
app.use(passport.initialize());
// Passport configure
require('./config/passport')(passport);
// Routes
app.use('/api/users',users);


const port = process.env.PORT || 5000;
app.listen(port, () => pl.success(`Server up and running on port ${port} !`))
