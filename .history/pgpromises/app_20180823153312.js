var express = require('express');
var app = express();
var db = require('./db/database.js');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/album', function(req, res){
    res.render('album');
})

app.listen(3000);
