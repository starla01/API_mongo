var express = require('express'),
    app = express(),
    port = process.env.PORT || 9000,
    mongoose = require('mongoose'),
    User = require('./services/models/users'), //created model loading here
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/thecat');

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var routes = require('./services/routes/users');
routes(app);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('REST API server started on: ' + port);