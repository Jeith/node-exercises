let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.send(`
        <h1>Cat Breeds</h1>
        <img src="/images/background.jpg" style="height: 400px;" >
    `)
})

module.exports = router;