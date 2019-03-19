require('custom-env').env();
const express 			= require('express');
const router 			= express.Router();
const UserController 	= require('../controllers/user.controller');
const PermissionController 	= require('../controllers/permission.controller');
const PermissionRoleController 	= require('../controllers/permissionRole.controller');
const UserRoleController 	= require('../controllers/userRole.controller');
const RoleController = require('../controllers/role.controller');
const ResourceController = require('../controllers/resource.controller');
const custom 	        = require(process.env.appPath+'/middleware/custom');
const passport      	= require('passport');
const path              = require('path');
require(process.env.appPath+'/middleware/passport')(passport)



router.get('/', function(req, res, next) {
  res.json({status:"success", message:'jjjj', data:{"version_number":"australia/444444/v1.0.0"}})
});

router.post('/users', UserController.create); 
router.get('/users',  UserController.getAll);    
router.post('/permission', PermissionController.create); 
router.post('/permissionRole', PermissionRoleController.create); 
router.post('/userRole', UserRoleController.create); 
router.post('/role', RoleController.create);
router.get('/role',  RoleController.getAll); 
router.post('/resource', ResourceController.create);
  

module.exports = router;
