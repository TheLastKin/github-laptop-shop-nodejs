const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
    id: { type: ObjectId },
    userId: { type: ObjectId, ref: 'User' },
    products: { type: [ObjectId], ref: 'Laptop'},
    orderDate: { type: Date },
    status: { type: String },
    totalCost: { type: Number },
    payment: { type: String },
    hasPaid: { type: Boolean },
});

module.exports = mongoose.model('Order', orderSchema);