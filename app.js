const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test DB (with sequelize)
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

// Handlebars
const hbs = exphbs.create({
  defaultLayout: 'main',

  // custom helper
  helpers: {
    checkIfSelected: function (arg1, arg2) {
      return (arg1 == arg2) ? 'selected' : '';
    }
  }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Index Route
app.get('/', (req, res) => {res.render('index', { layout: 'landing' })});

// Courses Routes
app.use('/courses', require('./routes/courses'));

// Teachers Routes
app.use('/teachers', require('./routes/teachers'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on Port: ${PORT}`));


