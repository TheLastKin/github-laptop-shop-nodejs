const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var productInteractionSchema = new Schema({
    id: { type: ObjectId },
    userId: { type: ObjectId, ref: 'User' },
    userViewCount: { type: Number },
    userRating: { type: Number},
    userReview: { type: String },
    productId: { type: ObjectId, ref: 'Laptop' },
});

module.exports = mongoose.model('ProductInteraction', productInteractionSchema);