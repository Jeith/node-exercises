var rp = require('request-promise');

var urls = [ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ];

var cheerio = require('cheerio');
 
var options = {
    uri: 'http://www.google.com',
    transform: function (body) {
        return cheerio.load(body);
    }
};
 
rp(options)
    .then(function ($) {
        
    })
    .catch(function (err) {
        console.log("oops")
    });