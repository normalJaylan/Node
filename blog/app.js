var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
//var routes = require('./routes');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes(app);

app.get('/signin', function(req, res) {
    res.render('signin');
});

app.listen(app.get('port'), function() {
    console.log('Express has listening on port ' + app.get('port'));
});

module.exports = app;
