require('custom-env').env();
const { userRole }    = require('../models');
const { to, ReE, ReS }  = require(process.env.appPath+'/services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.role_id && !body.user_id){
        return ReE(res, 'Please enter role id or user id.');
    }else{
        let err, user_role;

        [err, user_role] = await to(userRole.create(body));
        if(err){
            if(err.message=='Validation error') err = 'The validation error';
            return ReE(res, err);
        }
        return ReS(res, {message :'create permission user: '+user_role.id});

    }
}
module.exports.create = create;