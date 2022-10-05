const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const Map = require('../views/Map');


router.get('/', (req, res) => {
  renderTemplate(Map, null, res);
});

module.exports = router;