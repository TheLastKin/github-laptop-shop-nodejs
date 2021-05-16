var ProductCartServices = require('../services/product-cart-service');
var ProductCart = require('../models/ProductCart');
var mongoose = require('mongoose');

exports.addToCart = (userId, productId, quantity) => {
    var productCart = new ProductCart({
        _id: new mongoose.Types.ObjectId(),
        userId: userId,
        product: productId,
        quantity: quantity,
    });
    return ProductCartServices.addToCart(productCart);
};

exports.getProductsInCart = (userId) => {
    return ProductCartServices.getProductsInCart(userId);
};

exports.updateProductCartQuantity = (productCartId, quantity) => {
    return ProductCartServices.updateProductCartQuantity(productCartId, quantity);
};

exports.removeProductInCart = (productCartId) => {
    return ProductCartServices.removeProducInCart(productCartId);
};