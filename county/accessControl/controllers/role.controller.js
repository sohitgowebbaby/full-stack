require('custom-env').env();
const { Role }    = require('../models');
const { to, ReE, ReS }  = require(process.env.appPath+'/services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.title){
        return ReE(res, 'Please enter a title.');
    }else{
        let err, role;

        [err, role] = await to(Role.create(body));
        if(err){
            if(err.message=='Validation error') err = 'The role is already in use';
            return ReE(res, err);
        }
        return ReS(res, {message :'Create Role: '+role.id});

    }
}
module.exports.create = create;



const getAll = async function(req, res){
    
    let err, roles;

    [err, roles] = await to(Role.findAll());

    return ReS(res, {result:roles});
}
module.exports.getAll = getAll;