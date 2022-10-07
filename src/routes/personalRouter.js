const express = require('express');
const db = require('../../db/models');
const router = express.Router();

const renderTemplate = require('../lib/renderTemplat');
const Personal = require('../views/Personal')

router.get('/',  (req, res) => {
    renderTemplate(Personal, null, res);

})



module.exports = router;