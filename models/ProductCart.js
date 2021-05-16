const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const productCartSchema = new Schema({
    id: { type: ObjectId },
    userId: {type: ObjectId, ref: 'User' },
    product: { type: ObjectId, ref: 'Laptop' },
    quantity: { type: Number },
});

module.exports = mongoose.model('ProductCart', productCartSchema);