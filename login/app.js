var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.set('views', './views');        // 设置模板目录
app.set('view engine', 'ejs');      // 设置模板引擎

// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(app.get('port'), function() {
    console.log('Express has listening on port : ' + app.get('port'));
});
