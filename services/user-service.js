var User = require('../models/UserModel');
const mongoose = require('mongoose');

exports.login = async (email, password) => {
    let user = null;
    try{
        user = await User.findOne({ email: email, password: password }).select({ password: 0 });
    }catch(e){
        console.error(e);
    }
    return user;
};

exports.registerUser = async (user) => {
    let result = null;
    let isUserExisted = null;
    try{
        isUserExisted = await User.findOne({email: user.email});
        if(!isUserExisted){
            result = await user.save();
            result = Object.assign(result, {success: true});
        }else{
            result = { userExisted: true };
        }
    }catch(e){
        console.error(e);
    }
    return result;
};

exports.updateUserInfo = async (userId, userInfo) => {
    let result = null;
    try{
        result = await User.updateOne({_id: userId}, userInfo);
    }catch(e){
        console.error(e);
    }
    return result;
};

exports.getUserInfo = async (userId) => {
    let user = null;
    try{
        user = await User.findOne({ _id: userId }).select({ password: 0 });
    }catch(e){
        console.error(e);
    }
    return user;
};