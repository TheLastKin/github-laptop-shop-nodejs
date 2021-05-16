var Brand = require('../models/BrandModel');

exports.getBrands = async () => {
    return await Brand.find({});
};