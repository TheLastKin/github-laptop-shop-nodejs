var Order = require('../models/OrderModel');

exports.executeOrder = (order) => {
    try{
        order.save();
    }catch(e){
        console.error(e)
    };
};