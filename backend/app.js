const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const router = express.Router();

// Initialize dotenv
dotenv.config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

mongoose.connect(process.env.MONGO_URI);

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.use('/', indexRouter);
router.use('/users', usersRouter);
app.use('/api', router);
app.use('*', (req, res) => {
  res.status(404).send({
    message: 'Not Found',
  });
});

module.exports = app;
