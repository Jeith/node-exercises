let express = require('express');
let app = express();

const initOptions = {
    promiseLib: promise 
};

const pgp = require('pg-promise')(initOptions);

Promise.all([ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ])
.then(function (responses) {
  console.log(responses[0].data);
  console.log(responses[1].data);
})
}
 
server.on('close', function(){
    pgp.end();
})