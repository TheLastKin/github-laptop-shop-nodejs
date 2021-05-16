const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const adminSchema = new Schema({
    id: {type: ObjectId},
    username: {type: String},
    password: {type: String},
    displayName: { type: String },
});

module.exports = mongoose.model("Admin", adminSchema);
