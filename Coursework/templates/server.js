/**
 * Created by 1603232 on 09/04/2018.
 */

// server.js

var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load ejs view file

// index page
app.get('/', function(req,res) {
    res.render('pages/index');
});

app.listen(8080);