var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendfile('public/signin.html');
});

router.post('/', function(req, res) {
    res.redirect('/');
});

module.exports = router;
