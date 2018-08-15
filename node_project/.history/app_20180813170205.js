let express = require('express');
let app = express();
let data = require('./data.json');

app.set('appData', data);

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/cats'));

app.listen(8000, function () {
    console.log('Listening on port 8000');
});