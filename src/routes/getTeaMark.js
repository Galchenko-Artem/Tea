const express = require('express');
const db = require('../../db/models');

const router = express.Router();

// router.post('/', async (req, res) => {

// })

router.post('/', async (req, res) => {
  try {
    const data = await db.Tea.findAll({ raw: true });
    console.log('ПОСТ ЗАПРОС К ТИМАРК', data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
  // res.redirect('/todos');
});

module.exports = router;