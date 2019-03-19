const express 			= require('express');
const router 			= express.Router();
const passport      	= require('passport');
const path              = require('path');

router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Login API", data:{"version_number":"v1.0.0"}})
});

module.exports = router;
