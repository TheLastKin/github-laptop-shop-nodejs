const adminService = require('../services/admin-services');

exports.findAdminById = (id) => {
    return adminService.findAdminByID(id);
};

exports.login = (username, password) => {
    return adminService.login(username, password);
};