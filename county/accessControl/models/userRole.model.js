require('custom-env').env();
const bcrypt 			= require('bcrypt');
const bcrypt_p 			= require('bcrypt-promise');
const {TE, to}          = require(process.env.appPath+'/services/util.service');
const CONFIG            = require(process.env.appPath+'/config/config');

module.exports = (sequelize, DataTypes) => {
    var Model = sequelize.define('userRole', {
        role_id     : DataTypes.STRING,
        user_id      : DataTypes.STRING,
       });

return Model;
};
