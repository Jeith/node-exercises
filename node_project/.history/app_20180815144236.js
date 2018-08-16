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
   
    res.render('pages/index', {
        cat: dataFile.breeds.name       
    });
});

app.get("/cats/:breedID", (req, res, next) => {
    var catId = req.params.breedID
    res.render('pages/cats', {
        cat: data.breeds,
        id: catId   
    });
});

module.exports = router;

app.listen(8000, function () {
    console.log('Listening on port 8000');
});