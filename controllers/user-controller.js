var userServices = require('../services/user-service');
var User = require('../models/UserModel');
var mongoose = require('mongoose');

exports.login = (email, password) => {
    return userServices.login(email, password);
};

exports.registerUser = (displayName, email, password) => {
    var user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: email,
        password: password,
        displayName: displayName,
        phoneNumber: 'Chưa có',
        address: 'Chưa có',
        favorPoint: 0,
        reputationPoint: 0,
        profilePicture: 'user_default.png',
    });
    return userServices.registerUser(user);
};

exports.updateUserInfo = (userId, displayName, phoneNumber, address) => {
    var userInfo = {
        displayName: displayName,
        phoneNumber: phoneNumber,
        address: address,
    };
    return userServices.updateUserInfo(userId, userInfo);
};

exports.getUserInfo = (userId) => {
    return userServices.getUserInfo(userId);
};