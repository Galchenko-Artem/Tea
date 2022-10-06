const express = require('express');
const db = require('../../db/models');
const router = express.Router();

const Home = require('../views/Home');
const renderTemplate = require('../lib/renderTemplat');

router.get('/', async (req, res) => {
  // получаем метки для карты Tea с базы, таблицы Teas 
  const teaMark = await db.Tea.findAll({ attributes: ['title', 'location', 'id'], raw: true });
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser, teaMark }, res);
}).post('/', async (req, res) => {
  try {
    const teaMark = await db.Tea.findAll({ attributes: ['title', 'location', 'id'], raw: true });
    res.json(teaMark);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;