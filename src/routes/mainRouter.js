const express = require('express');

const router = express.Router();

const Main = require('../views/Main');
const renderTemplate = require('../lib/renderTemplat');

router.get('/', (req, res) => {
  renderTemplate(Main, null, res);
});

module.exports = router;