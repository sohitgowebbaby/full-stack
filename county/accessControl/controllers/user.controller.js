require('custom-env').env();
const { User }          = require('../models');
const { to, ReE, ReS }  = require(process.env.appPath+'/services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.email){
        return ReE(res, 'Please enter an email to  register.');
    } else if(!body.password){
        return ReE(res, 'Please enter a password to register.');
    }else{
        let err, user;

    [err, user] = await to(User.create(body));
    if(err){
        if(err.message=='Validation error') err = 'The email address is already in use';
        return ReE(res, err);
    }
    return ReS(res, {message :'Create User: '+user.email});

    }
}
module.exports.create = create;


const getAll = async function(req, res){
    
    let err, users;

    [err, users] = await to(User.findAll());

    return ReS(res, {userInfo:users});
}
module.exports.getAll = getAll;
