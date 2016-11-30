var mysql = require('mysql');
var $conf = require('../config/db');
var $sql = require('./userSqlMapping');

// 使用连接池，提升性能
var pool = mysql.createPool($conf.mysql);

var methods = {
    // 检查该用户是否存在
    checkUser : function (username, phone, password, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                return callback(err, null);
            }
            connection.query($sql.checkUser, phone, function(err, result) {
                if (err) {
                    return callback(err, null);
                }
                if (result.length > 0) {
                    // 该用户已存在，不能注册
                    callback(null, 0);
                } else {
                    // 数据库中无该用户，可以注册
        //            console.log("数据库中无该用户，可以注册");
                    connection.query($sql.register, [username,phone,password], function(err, result) {
                        connection.release();
                        if (err) {
                            return callback(err, null);
                        }
                        if (result.length > 0) {
                            callback(null, 1);
                        }
                    });
                }
            });
        });
    },

//    finishAsk :
};

module.exports = methods;
