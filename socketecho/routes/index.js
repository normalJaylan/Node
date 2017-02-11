module.exports = function(app) {
    app.get('/', function(req, res) {

    });

    app.post('/', function(req, res) {

    });

    app.use('/signin', require('./signin'));
};
