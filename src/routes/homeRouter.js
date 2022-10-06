const express = require('express');

const router = express.Router();

const Home = require('../views/Home');
const renderTemplate = require('../lib/renderTemplat');

router.get('/', (req, res) => {
  console.log('In Home Routers');
  const newUser = req.session?.newUser;
  console.log("▶ ⇛ newUser", newUser);
  renderTemplate(Home, { newUser }, res);
});

module.exports = router;