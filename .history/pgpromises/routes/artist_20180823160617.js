let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let db = require('../db/database.js');

router.use(bodyParser.urlencoded({extended: false}));

router.post('/album', function(req, res){
    let name = req.body.name;

    db.result("INSERT INTO artist(name)\
    VALUES($1)", [name])
    .then(function(){
        
        db.query('SELECT * FROM artist')
        .then(function(results){
            res.render('artist', {
                'artist': results
            })
        })
    }) 
});

router.get('/album', function(req, res){
    db.query('SELECT * FROM artist')
    .then(function(results){
        res.render('artist',{
            'artist' : results
        })
    })
})

module.exports = router;