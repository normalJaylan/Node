/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello express');
});

module.exports = router;
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('hello, express');
});

module.exports = router;
