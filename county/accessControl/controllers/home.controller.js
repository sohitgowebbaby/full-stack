// require('custom-env').env();
// const { to, ReE, ReS } = require(global.APP_SERVER_PATH+'/services/util.service');

// const Dashboard = function(req, res){
// 	let user = req.user.id;
// 	return res.json({success:true, message:'You Are Login',id:user});
// }
// module.exports.Dashboard = Dashboard

const CONFIG = require(process.env.appPath+'/config/config');

var SequelizeAuto = require('sequelize-auto')
var auto = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
  host: CONFIG.db_host,
  dialect: CONFIG.db_dialect,
  port: CONFIG.db_port,
  operatorsAliases: false
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

With options:
var auto = new SequelizeAuto('database', 'user', 'pass', {
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    directory: false, // prevents the program from writing to disk
    port: 'port',
    additional: {
        timestamps: false
        //...
    },
    tables: ['table1', 'table2', 'table3']
    //...
})