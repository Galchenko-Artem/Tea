const express = require('express');
const db = require('../../db/models');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const TeaDescr = require('../views/TeaDescript');


router.get('/:id', async (req, res) => {
  // Получаем id чая
  const teaId = req.params.id;
  try {
    const result = await db.Tea.findOne({ where: { id: teaId }, raw: true });
    const toRender = JSON.stringify(result, null);
    renderTemplate(TeaDescr, result, res);
  } catch (err) {
    console.log(err);
  }

  // const { title, description } = req.body;
  // renderTemplate(TeaDescr,  toRender , res);
});

module.exports = router;