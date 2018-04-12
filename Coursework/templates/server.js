/**
 * Created by 1603232 on 09/04/2018.
 */

// server.js

var express = require('express');
var app = express();



// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("public"));

// use res.render to load ejs view file

// index page
app.get('/', function(req,res) {
    res.render('pages/index');
});

// map page
app.get('/munromap', function(req,res) {
    res.render('pages/map');
});

// list page
app.get('/munrolist', function(req,res) {
    res.render('pages/list');
});

// info page
app.get('/information', function(req,res) {
    res.render('pages/info');
});

// contact page
app.get('/contact', function(req,res) {
    res.render('pages/contact');
});

// login page
app.get('/login', function(req,res) {
    res.render('pages/login');
});

app.listen(8080);