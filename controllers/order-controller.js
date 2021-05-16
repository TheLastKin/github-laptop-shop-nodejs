var OrderSevices = require('../services/order-service');
var Order = require('../models/OrderModel');
var mongoose = require('mongoose');

exports.executeOrder = (userId, productIds, totalCost, payment, hasPaid) => {
    var order = new Order({
        _id: new mongoose.Types.ObjectId(),
        userId: userId,
        productId: productIds,
        orderDate: new Date(),
        status: "Đang vận chuyển",
        totalCost: totalCost,
        payment: payment,
        hasPaid: hasPaid,
    });
    OrderSevices.executeOrder(order);
}