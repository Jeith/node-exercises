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


    function saveWebPage(url, filename){
        axios.get(url)
        .then(function(htmlString){
            fs.writeFile(filename, htmlString.data, 'utf8', function(err){
                if (err) throw err;
                console.log('File saved');
            });
        })
        .catch(function(err){
            console.log(err);
        })
    };
    saveWebPage(url[1], 'blank.html')


    function cat(file1, file2, outputFile){
        var p = new Promise(function(resolve, reject){
            fs.readFile(file1, 'utf8', function(err, data){
                resolve(data);
            })
        })
        var c = new Promise(function(resolve, reject){
            fs.readFile(file2, 'utf8', function(err, data2){
                resolve(data2);
            })
        })
        Promise.all([p, c]).then(function(add){
            fs.writeFile(outputFile, add[0] + add[1], function(err){
                if (err) throw (err);
                console.log('added');
            })
        })
    }
    cat('blank.txt', 'blank2.txt', 'output.txt');


    function addNumbers(x, y){
        var promise = new Promise(function(resolve, reject){
            try {
                if(Number.isInteger(x) && Number.isInteger(y)){
                    resolve(x + y);
                }
                else{
                    reject('error');
                }
             
            } catch(error) {
    
            }
        })
        return promise;
    }
    
    addNumbers(4, 12).then(function(result){
        console.log(result);
    }).catch(function(error){
        console.log(error);
    });
    
app.listen(8000, function(){
    console.log('Listening on port 8000');
});