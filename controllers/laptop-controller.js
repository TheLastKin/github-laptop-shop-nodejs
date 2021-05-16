var laptopServices = require('../services/laptop-services');
var Laptop = require('../models/LaptopModel');
var mongoose = require('mongoose');
var converter = require('../ultility/converter');

exports.getLaptops = () => {
    return laptopServices.getLaptops();
};

exports.getLaptopByID = (laptopID) => {
    return laptopServices.getLaptopByID(laptopID);
};

exports.getLaptopsWithQuery = (name, brand, sortByOther) => {
    return laptopServices.getLaptopsWithQuery(name, brand, sortByOther);
}

exports.getMostViewedLaptops = () => {
    return laptopServices.getMostViewedLaptops();
}

exports.getLatestLaptop = () => {
    return laptopServices.getLatestLaptops();
}

exports.addNewLaptop = (req, laptopInfo) => {
    if (req.file) {
        laptopInfo.image = req.file.originalname;
        var laptop = new Laptop({
            _id: new mongoose.Types.ObjectId(),
            ...laptopInfo,
            adminId: converter.parseJwt(req.session.token).admin._id,
            addDate: new Date(),
            viewCount: 0,
            rating: 0,
            monthlySalesCount: 0,
        });
        laptopServices.addNewLaptop(laptop);
    }
};

exports.editLaptop = (req, laptopInfo) => {
    var laptop = {};
    if (req.file) {
        laptopInfo.image = req.file.originalname;
        laptop = Object.assign({}, laptopInfo);
        delete laptop.id;
        delete laptop.imageOld;
    }else{
        laptop = Object.assign({}, laptopInfo);
        laptop.image = laptop.imageOld;
        delete laptop.id;
        delete laptop.imageOld;
    }
    laptopServices.editLaptop(laptopInfo.id, laptop);
};

exports.removeLaptop = (laptopID) => {
    laptopServices.removeLaptop(laptopID);
};

exports.updateLaptopViewCount = (laptopId) => {
    laptopServices.updateLaptopViewCount(laptopId, 1);
}