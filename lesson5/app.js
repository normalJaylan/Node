var async = require('async');

var conncurrencyCount = 0;
function fetchUrl(url, callback) {
        var delay = parseInt((Math.random() * 10000000) % 2000, 10);
        console.log(delay);
        conncurrencyCount++;
        console.log('现在的并发数是', conncurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
        setTimeout(function() {
            conncurrencyCount--;
            callback(null, url + ' html content');
        }, delay);
};

var urls = [];
for (var i = 0; i < 10; i++) {
    urls.push('http://datasource_' + i);
}

async.mapLimit(urls, 5, function(url, callback) {
    console.log('async');
    fetchUrl(url, callback);
}, function(err, result) {
    console.log('final:');
    console.log(result);
});
