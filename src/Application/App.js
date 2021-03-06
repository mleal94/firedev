const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { StudentController, ClassRoomController } = require('../modules');

const App = express();
App.use(cors());
App.use(morgan('dev'));
App.use(express.json());

// Database connection
require('../config/database.config');

// API Routing
App.use(StudentController);
App.use(ClassRoomController);

module.exports = App;
