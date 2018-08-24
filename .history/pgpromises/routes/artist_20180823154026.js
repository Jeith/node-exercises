let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let db = require('../db/database.js');

router.use(bodyParser.urlencoded({extended: false}));

router.post('/dishes', function(req, res){
    let title = req.body.title;

    db.result("INSERT INTO dishes(title, description, price, course, imageURL)\
    VALUES($1, $2, $3, $4, $5)", [title, description, price, course, imageURL])
    .then(function(){
        
        db.query('SELECT * FROM dishes')
        .then(function(results){
            res.render('dishes', {
                'dishes': results
            })
        })
    }) 
});

router.get('/dishes', function(req, res){
    db.query('SELECT * FROM dishes')
    .then(function(results){
        res.render('dishes',{
            'dishes' : results
        })
    })
})

module.exports = router;