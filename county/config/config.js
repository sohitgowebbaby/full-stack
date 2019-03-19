let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = 'dev';
CONFIG.port         = '3000';

CONFIG.db_dialect   = 'mysql';
CONFIG.db_host      = 'localhost';
CONFIG.db_port      = '3306';
CONFIG.db_name      = 'nodeProject';
CONFIG.db_user      = 'root';
CONFIG.db_password  = '123456';

CONFIG.jwt_encryption  =  'ASDF!@#$';
CONFIG.jwt_expiration  =  '10000';

module.exports = CONFIG;
