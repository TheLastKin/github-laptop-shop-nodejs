var ProductInteraction = require('../models/productInteraction');
var mongoose = require('mongoose');

exports.onUserClickedProduct = async (userId, productId) => {
    var interaction = null;
    try{
        interaction = await ProductInteraction.findOne({userId: userId, productId: productId});
        if(interaction){
            await ProductInteraction.updateOne(interaction._id, {$inc: {viewCount: 1}});
        }else{
            interaction = new ProductInteraction({
                _id: new mongoose.Types.ObjectId(),
                userId: userId,
                userViewCount: 1,
                userRating: 0,
                userReview: '',
                productId: productId,
            });
            interaction.save();
        }
    }catch(e){
        console.log(e);
    }
};