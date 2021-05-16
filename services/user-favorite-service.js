var UserFavorite = require('../models/UserFavorite');
var mongoose = require('mongoose');
const { getLaptopByID } = require('./laptop-services');

exports.addUserFavorite = async (userFavorite) => {
    let result = null;
    try{
        result = await userFavorite.save();
    }catch(e){
        console.error(e);
    }
    return result;
};

exports.isUserFavorite = async (userId, productId) => {
    let isFavorite = null;
    try{
        isFavorite = await UserFavorite.findOne({ userId: userId, product: productId });
    }catch(e){
        console.error(e);
    }
    return isFavorite;
};

exports.getUserFavorites = async (userId) => {
    let userFavorites = [];
    let laptops = [];
    try{
        userFavorites = await UserFavorite.find({ userId: userId });
        for(let i = 0; i < userFavorites.length; i++){
            let laptop =  await getLaptopByID(userFavorites[i].product);
            laptops.push(laptop);
        }
    }catch(e){
        console.error(e);
    }
    return laptops;
};

exports.removeUserFavorite = async (userId, productId) => {
    let result = null;
    try{
        result = await UserFavorite.deleteOne({ userId: userId, product: productId });
    }catch(e){
        console.error(e);
    }
    return result;
};