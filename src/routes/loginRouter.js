const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const Login = require('../views/Login');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Login, null, res);
});

module.exports = router;