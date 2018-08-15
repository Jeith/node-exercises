let express = require('express');
let router = express.Router();


router.get('/cats', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;

    dataFile.breeds.forEach(function(item){
        myHTML += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/${item.imagename}_01.jpg" alt="">
            <p>${item.summary}</p>
        </li>
        `;
    })
    

    res.send(`
    <h1>Cats</h1>
    <ul>
        ${myHTML}
    </ul>
    `)
})


router.get('/breeds/:catID', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;

    let cat = dataFile.breeds[req.params.catID];

    res.send(`
        <h2>${cat.name}</h2>
        <img src="/images/${cat.imagename}_01.jpg" alt="">
        <p>${cat.description}</p>
    `)
})

module.exports = router;