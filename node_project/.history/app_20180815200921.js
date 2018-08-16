let express = require('express');
let app = express();
let router = express.Router();
let data = require('./data/data.json');

app.set('view engine', 'ejs');
app.set('appData', data);

app.locals.siteTitle = "Cat Breeds"

app.use(express.static('public'));

app.get("/", (req, res, next) => {
    let dataFile = req.app.get("appData");
    var randomNum = Math.floor((Math.random() * 2));
    var cat = data.breeds
    res.render('pages/index', {
        rand: randomNum,
        cat: dataFile.breeds,
        id: 3
    });
});

app.get("/cats/:breedID", (req, res, next) => {
    var catId = req.params.breedID
    var cat = data.breeds
    console.log(catId)
 
    res.render('pages/cats', {
        cat: data.breeds,
        id: catId   
    });
});

app.get("/catlist", (req, res, next) => {
    let dataFile = req.app.get("appData");
    var cat = data.breeds
    res.render('pages/catlist', {
        cat: dataFile.breeds,
        id: 3
    });
});

module.exports = router;

app.listen(8000, function () {
    console.log('Listening on port 8000');
});