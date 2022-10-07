const bcrypt = require('bcrypt');

const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplat');
const Register = require('../views/Register');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("▶ ⇛ req.body", req.body);
  console.log("▶ ⇛ name email", name, email, password);
  console.log('In regRouters');
  try {
    const user = await User.findOne({ where: { email }});
    if(user){
      res.redirect('/login')
      return
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash });
    req.session.newUser = newUser.name;
    req.session.save(() => {
      console.log('Создали Юзера в regrouters');
      res.redirect('/');
    })
  } catch (error) {
    console.log('Error in regRouters');
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
