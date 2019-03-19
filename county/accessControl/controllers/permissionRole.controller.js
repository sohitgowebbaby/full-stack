require('custom-env').env();
const { permissionRole }    = require('../models');
const { to, ReE, ReS }  = require(process.env.appPath+'/services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.permission_id && !body.role_id && !body.permission_grant){
        return ReE(res, 'Please enter permission id or role id number or grant.');
    }else{
        let err, permission_role;

        [err, permission_role] = await to(permissionRole.create(body));
        if(err){
            if(err.message=='Validation error') err = 'The validation error';
            return ReE(res, err);
        }
        return ReS(res, {message :'create permission role: '+permission_role.id});

    }
}
module.exports.create = create;