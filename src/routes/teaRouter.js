const express = require('express');
const db = require('../../db/models');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const TeaDescr = require('../views/TeaDescript');


router.get('/:id', async (req, res) => {
  const newUser = req.session?.newUser;
  // Получаем id чая методом GET
  const teaId = req.params.id;
  try {
    // Получили с бд данные о чае по id
    const result = await db.Tea.findOne({ where: { id: teaId }, raw: true });
    // const toRender = JSON.stringify(result, null);
    // Передали данные о чае пропсом в рендер
    renderTemplate(TeaDescr, { result, newUser }, res);
  } catch (err) {
    console.log(err);
  }

  // const { title, description } = req.body;
  // renderTemplate(TeaDescr,  toRender , res);
});

module.exports = router;