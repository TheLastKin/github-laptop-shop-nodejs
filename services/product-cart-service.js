var ProductCart = require('../models/ProductCart');

exports.addToCart = async (productCart) => {
    let result = null;
    try{
        let hasProductInCart = await ProductCart.findOne({userId: productCart.userId, product: productCart.product});
        if (!hasProductInCart){
            result = await productCart.save();
        }else{
            result = { alreadyInCart: true };
        }
    }catch(e){
        console.error(e)
    }
    return result;
};

exports.getProductsInCart = async (userId) => {
    let productCarts = null;
    try{
        productCarts = await ProductCart.find({userId: userId}).populate('product', 'name price image quantity');
    }catch(e){
        console.error(e);
    }
    return productCarts;
};

exports.updateProductCartQuantity = async (productCartId, quantity) => {
    let result = null;
    try{
        result = await ProductCart.updateOne({_id: productCartId}, { quantity: quantity })
    }catch(e){
        console.error(e);
    }
    return result;
};

exports.removeProducInCart = async (productCartId) => {
    let result = null;
    try{
        result = await ProductCart.deleteOne({_id: productCartId});
    }catch(e){
        console.error(e);
    }
    return result;
};