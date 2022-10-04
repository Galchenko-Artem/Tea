require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { sequelize } = require('../db/models');

const app = express();
const mainRouter = require('./routes/mainRouter');
const regRouter = require('./routes/regRouter');
const loginRouter = require('./routes/loginRouter');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env;

app.use('/', mainRouter);
app.use('/registration', regRouter);
app.use('/login', loginRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
