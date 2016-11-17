var express = require('express');

var app = express();

app.get('/upload', function(request, response) {
    response.send('Hello Node');
});

app.listen(3000, function() {
    console.log('app is listening at port 3000');
});
