require('custom-env').env();
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const {TE, to}          = require(process.env.appPath+'/services/util.service');
const CONFIG            = require(process.env.appPath+'/config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('permissionRole', {
        permission_id     : DataTypes.STRING,
        role_id      : DataTypes.STRING,
        permission_grant  : DataTypes.STRING,
    });

return Model;
};
