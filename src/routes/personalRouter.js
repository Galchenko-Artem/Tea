const express = require('express');
const db = require('../../db/models');
const router = express.Router();

const renderTemplate = require('../lib/renderTemplat');
const Personal = require('../views/Personal')

router.get('/',  (req, res) => {
    renderTemplate(Personal, null, res);

});
 
router.post('/', async (req, res) => {
    try {
        const teas = await Tea.create({title, descriptions, location, imgLink});
        res.redirect('/')
    } catch (error) {
        res.send(`Error ------> ${error}`);
    }
})



module.exports = router;