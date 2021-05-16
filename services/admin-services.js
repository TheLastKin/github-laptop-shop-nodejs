var Admin = require('../models/AdminModel');

exports.findAdminByID = async (id) => {
    return await Admin.findById(id, 'username');
};
exports.login = async (username, password) => {
    return await Admin.findOne({ username: username, password: password}, 'displayName');
};