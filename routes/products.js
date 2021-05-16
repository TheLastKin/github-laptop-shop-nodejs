var express = require('express');
var router = express.Router();
var auth = require('../ultility/authen');
var upload = require('../ultility/upload');
var laptopController = require('../controllers/laptop-controller');
var converter = require('../ultility/converter');
var middle = [auth.authenticate, upload.single('image')];
var brandController = require('../controllers/brand-controller');

/* GET home page. */
router.get('/laptop', auth.authenticate, async function(req, res, next) {
  res.render('products-laptop', {
    laptops: await laptopController.getLaptopsWithQuery(".*", "Apple", "addDate"),
    brands: await brandController.getBrands(),
    admin: converter.parseJwt(req.session.token),
  });
});

router.get('/laptop/add-laptop', auth.authenticate, async function(req, res, next) {
  res.render('add-laptop', { brands: await brandController.getBrands()});
});

router.post('/laptop/add-laptop', middle, function(req, res){
  laptopController.addNewLaptop(req, req.body);
  res.redirect('/products/laptop');
});

router.get('/laptop/edit-laptop/:id', auth.authenticate, async function(req, res){
  res.render('edit-laptop', { 
    p: await laptopController.getLaptopByID(req.params.id),
    brands: await brandController.getBrands(),
  });
});

router.post('/laptop/edit-laptop', middle, async function(req, res){
  await laptopController.editLaptop(req, req.body);
  res.redirect('/products/laptop');
});

router.delete('/laptop/delete/:id', auth.authenticate, async function(req, res){
  await laptopController.removeLaptop(req.params.id);
  res.send({res: true});
});

router.get('/laptop/filter/:name/:brand/:sortByOther', auth.authenticate, async function(req, res){
  res.send({ laptops: await laptopController.getLaptopsWithQuery(
    req.params.name,
    req.params.brand,
    req.params.sortByOther,
  )});
});

module.exports = router;
