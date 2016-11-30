var express = require('express');
var userDao = require('../dao/userDao');

module.exports = function(app) {

    app.get('/', function(req, res ,next) {
        res.redirect('login.html');
    });


    app.post('/register', function(req, res) {
        var username = req.body.username;
        var phone = req.body.phone;
        var password = req.body.password;

        userDao.checkUser(username, phone, password, function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
    });
};
