const express = require('express');

const router = express.Router();

const Home = require('../views/Home');
const renderTemplate = require('../lib/renderTemplat');

router.get('/', (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser }, res);
});

module.exports = router;