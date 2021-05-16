const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var userFavoriteSchema = new Schema({
    id: { type: ObjectId },
    userId: { type: ObjectId },
    product: { type: ObjectId },
});

module.exports = mongoose.model('UserFavorite', userFavoriteSchema);