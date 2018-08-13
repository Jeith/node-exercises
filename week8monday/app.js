var express = require('express');
var app = express();
var router = express.Router();

app.get('/', function(request, response){
    request.message = "hello";
    response.send("<h1>Hello World!</h1>");
})

app.get('/cats', function(request, response){
    response.send('meow')
})

app.get('/dogs', function(request, response){
    response.send('woof')
})

app.get('/cats_and_dogs', function(request, response){
    response.send('Living together')
})

app.get('/greet', function(request, response){
    var name = request.param('name')
    response.send("Hello " + name)
})

app.get('/year', function(request, response){
    var age = request.query.age;
    var year = 2018 - age;
    response.send('You were born in ' + year);
})

module.exports = router;
app.listen(8000, function () {
    console.log('Listening on port 8000');
});