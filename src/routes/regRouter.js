const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const Register = require('../views/Register');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});

module.exports = router;