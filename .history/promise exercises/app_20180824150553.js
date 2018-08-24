let express = require('express');
let app = express();
let axios = require('axios');
var fs = require('fs');
var rp = require('request-promise');

const db = pgp(config);

var urls = [ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ];

const pgp = require('pg-promise')(initOptions);
const config = {
    host: 'localhost',
    port: 5432,
    database: 'veronica2',
    user: 'postgres'
};

p1 = rp(urls[0]);
p2 = rp(urls[1]);
p3 = rp(urls[2]);
p4 = rp(urls[3]);
p5 = rp(urls[4]);

Promise.all([p1, p2, p3, p4, p5])
    .then(function(res){
        console.log(res[0]);
        console.log(res[1]);
        console.log(res[2]);
        console.log(res[3]);
        console.log(res[4]);
    });

    Promise.all(['https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome'])
    .then(function(responses){
        responses.forEach(function(e){
            rp(e)
            .then(function(htmlString){
                console.log(htmlString);
            })
            .catch(function(err){
                console.log(err);
            })
        })
    });

app.listen(8000, function(){
    console.log('Listening on port 8000');
});