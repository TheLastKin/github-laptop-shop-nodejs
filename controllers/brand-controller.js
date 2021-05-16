var brandServices = require('../services/brand-services');

exports.getBrands = () => {
    return brandServices.getBrands();
}