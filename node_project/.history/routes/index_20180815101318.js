let express = require('express');
let router = express.Router();

router.get("/", (req, res, next) => {
    let data = req.app.get("data");
   
    res.render('index', {  
    });
});

module.exports = router;