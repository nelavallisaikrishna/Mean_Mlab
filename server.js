/**
 * Created by sai on 19/12/16.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 8000;

var app = express();

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs' );
app.engine('html', require('ejs').renderFile);

//Satic folder for Angular content

app.use(express.static(path.join(__dirname, 'client')));

//Body parser Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/api', tasks);

app.listen(port, function () {
 console.log('Server started at port no ' + port);
});
