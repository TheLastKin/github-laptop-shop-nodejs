var express = require('express');
var router = express.Router();
var laptopController = require('../controllers/laptop-controller');
var adminController = require('../controllers/admin-controller');
var brandController = require('../controllers/brand-controller');
var userController = require('../controllers/user-controller');
var productCartController = require('../controllers/product-cart-controller');
var userFavoriteController = require('../controllers/user-favorite-controller');

router.get('/products/laptop/filter/:name/:brand/:orderBy', async function(req, res){
    res.json(await laptopController.getLaptopsWithQuery(
        req.params.name,
        req.params.brand,
        req.params.orderBy,
    ));
});

router.get('/products/laptop/brands', async function(req, res){
    res.json(await brandController.getBrands());
});

router.get('/products/laptop/MostViewed', async function(req, res){
    res.json(await laptopController.getMostViewedLaptops());
});

router.get('/products/laptop/Latest', async function (req, res){
    res.json(await laptopController.getLatestLaptop());
});

router.get('/products/laptop/updateViewCount/:laptopId', async function(req, res){
    res.json(await laptopController.updateLaptopViewCount(req.params.laptopId));
});

router.get('/loginUser/:email/:password', async function(req, res){
    res.json(await userController.login(req.params.email, req.params.password));
});

router.get('/user/addToCart/:userId/:productId/:quantity', async function(req, res){
    res.json(await productCartController.addToCart(
        req.params.userId,
        req.params.productId,
        req.params.quantity)
    );
});

router.get('/user/getProductsInCart/:userId', async function(req, res){
    res.json(await productCartController.getProductsInCart(req.params.userId));
});

router.get('/registerUser/:displayName/:email/:password', async function(req, res){
    res.json(await userController.registerUser(
        req.params.displayName,
        req.params.email,
        req.params.password,
    ));
});

router.get('/updateUser/:userId/:displayName/:phoneNumber/:address/:photoURL', async function(req, res){
    res.json(await userController.updateUserInfo(
        req.params.userId,
        req.params.displayName,
        req.params.phoneNumber,
        req.params.address,
        req.params.photoURL,
    ));
});

router.get('/productCart/updateProduct/:productCartId/:quantity', async function(req, res){
    res.json(await productCartController.updateProductCartQuantity(
        req.params.productCartId,
        req.params.quantity,
    ));
});

router.get('/userInfo/:userId', async function(req, res){
    res.json(await userController.getUserInfo(req.params.userId));
});

router.get('/productCart/removeProduct/:productCartId', async function(req, res){
    res.json(await productCartController.removeProductInCart(req.params.productCartId));
});

router.get('/user/addFavorite/:userId/:productId', async function(req, res){
    res.json(await userFavoriteController.addUserFavorite(
        req.params.userId,
        req.params.productId,
    ));
});

router.get('/user/getFavorites/:userId', async function(req, res){
    res.json(await userFavoriteController.getUserFavorites(req.params.userId));
});

router.get('/user/removeFavorite/:userId/:productId', async function(req, res){
    res.json(await userFavoriteController.removeUserFavorite(
        req.params.userId,
        req.params.productId,
    ));
});

router.get('/user/isFavorite/:userId/:productId', async function(req, res){
    res.json(await userFavoriteController.isUserFavorite(
        req.params.userId,
        req.params.productId,
    ));
});

module.exports = router;