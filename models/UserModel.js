const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
    id: { type: ObjectId },
    displayName: { type: String },
    email: { type: String },
    password: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    favorPoint: { type: Number },
    reputationPoint: { type: Number },
    photoURL: { type: String },
});

module.exports = mongoose.model('User', userSchema);