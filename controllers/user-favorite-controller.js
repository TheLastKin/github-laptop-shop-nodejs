const userFavoriteService = require("../services/user-favorite-service")
const UserFavorite = require("../models/UserFavorite")
var mongoose = require('mongoose');

exports.addUserFavorite = (userId, productId) => {
    let userFavorite = new UserFavorite({
        id: mongoose.Types.ObjectId(),
        userId: userId,
        product: productId,
    });
    return userFavoriteService.addUserFavorite(userFavorite);
};

exports.isUserFavorite = (userId, productId) => {
    return userFavoriteService.isUserFavorite(userId, productId);
};

exports.getUserFavorites = (userId) => {
    return userFavoriteService.getUserFavorites(userId);
};

exports.removeUserFavorite = (userId, productId) => {
    return userFavoriteService.removeUserFavorite(userId, productId);
};