let express = require('express');
let app = express();
let router = express.Router();
let data = require('./data/data.json');

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('appData', data);

app.locals.siteTitle = "Cat Breeds"

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(function(req, res, next){
    console.log("clicked page" + req.originalUrl.toString());
    next();
});

app.get("/", (req, res, next) => {
    let dataFile = req.app.get("appData");
    var randomNum = Math.floor((Math.random() * 3));
    var cat = data.breeds
    res.render('pages/index', {
        rand: randomNum,
        cat: dataFile.breeds,
        id: 3
    });
});

app.get("/feedback", (req, res, next) => {
    let dataFile = req.app.get("appData");
    var randomNum = Math.floor((Math.random() * 3));
    var cat = data.breeds
    res.render('pages/index', {
        rand: randomNum,
        cat: dataFile.breeds,
        id: 3
    });
});

app.get("/cats/:breedID", (req, res, next) => {
    var randomNum = Math.floor((Math.random() * 3));
    var catId = req.params.breedID
    var cat = data.breeds
    console.log(catId)
 
    res.render('pages/cats', {
        rand: randomNum,
        cat: data.breeds,
        id: catId   
    });
});

app.get("/catlist", (req, res, next) => {
    var randomNum = Math.floor((Math.random() * 3));
    let dataFile = req.app.get("appData");
    var cat = data.breeds
    res.render('pages/catlist', {
        rand: randomNum,
        cat: dataFile.breeds,
        id: 3
    });
});

app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

module.exports = router;

app.listen(8000, function () {
    console.log('Listening on port 8000');
});