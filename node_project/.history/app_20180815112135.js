let express = require('express');
let app = express();
let data = require('./data/data.json');

app.set('view engine', 'ejs');
app.set('appData', data);

app.locals.siteTitle = "Cat Breeds"

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('pages/index', {

    });
});

router.get("/", (req, res, next) => {
    let dataFile = req.app.get("catData");
   
    res.render('pages/index', {
        cat: dataFile.breeds.name       
    });
});


app.get('/cats', function(req, res) {
    res.render('pages/cats');
});

app.listen(8000, function () {
    console.log('Listening on port 8000');
});