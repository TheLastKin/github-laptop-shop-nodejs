const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const laptopSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    batteryLife: { type: String },
    graphicCardMemory: { type: String },
    brand: { type: ObjectId, ref: 'Brand' },
    camera: { type: String },
    graphicCard: { type: String },
    CPU: { type: String },
    CPUSpeed: { type: String },
    diskSpace: { type: String },
    hardwareType: { type: String },
    RAM: { type: String },
    resolution: { type: String },
    OS: { type: String },
    description: {type: String},
    addDate: { type: Date },
    adminId: { type: ObjectId, ref: 'Admin' },
    quantity: { type: Number },
    viewCount: { type: Number },
    rating: {type: Number },
    monthlySalesCount: { type: Number },
});

module.exports = mongoose.model('Laptop', laptopSchema);