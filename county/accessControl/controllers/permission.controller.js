require('custom-env').env();
const { Permission }    = require('../models');
const { to, ReE, ReS }  = require(process.env.appPath+'/services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.permission_key && !body.title && !body.module){
        return ReE(res, 'Please enter a title or module number or key.');
    }else{
        let err, permission;

        [err, permission] = await to(Permission.create(body));
        if(err){
            if(err.message=='Validation error') err = 'The validation error';
            return ReE(res, err);
        }
        return ReS(res, {message :'Create Permission: '+permission.title});

    }
}
module.exports.create = create;