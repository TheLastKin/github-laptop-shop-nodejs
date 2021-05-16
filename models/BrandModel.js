const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var brandSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
});

module.exports = mongoose.model('Brand', brandSchema);