var rp = require('request-promise');
let express = require('express');
let app = express();

var urls = [ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ];

var cheerio = require('cheerio');
 
var options = Promise.all([p1, p2])
.then(function (responses) {
  console.log(responses[0].data);
  console.log(responses[1].data);
});
};
 
rp(options)
    .then(function ($) {
        
    })
    .catch(function (err) {
        console.log("oops")
    });

app.listen(8000, function () {
    console.log('Listening on port 8000');
});