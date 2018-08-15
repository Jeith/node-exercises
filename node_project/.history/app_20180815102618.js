let express = require('express');
let app = express();
let data = require('./data/data.json');

app.set('view engine', 'ejs');
app.set('appData', data);

app.locals.siteTitle = "Cat Breeds"

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('./index');
});

// about page 
app.get('/cats', function(req, res) {
    res.render('./cats');
});

app.listen(8000, function () {
    console.log('Listening on port 8000');
});