var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var auth = require('../ultility/authen');
var adminController = require('../controllers/admin-controller');

router.get('/', auth.authenticate, function (req, res) {
  res.redirect('/products/laptop');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/login', async function (req, res) {
  let { username, password } = req.body;
  let admin = await adminController.login(username, password);
  if (admin) {
    var token = jwt.sign({ admin }, process.env.JWT_KEY);
    req.session.token = token;
    res.redirect('/products/laptop');
  } else {
    res.redirect('/login');
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/login');
  });
});

module.exports = router;
