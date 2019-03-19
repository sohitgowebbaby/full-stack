require('custom-env').env();
const { Resource }    = require('../models');
const { to, ReE, ReS }  = require(process.env.appPath+'/services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.title){
        return ReE(res, 'Please enter a title.');
    }else{
        let err, resource;

        [err, resource] = await to(Resource.create(body));
        if(err){
            if(err.message=='Validation error') err = 'The resource is already in use';
            return ReE(res, err);
        }
        return ReS(res, {message :'Create Resource: '+resource.id});

    }
}
module.exports.create = create;