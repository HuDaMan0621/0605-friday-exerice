var express = require('express');
var route = express.Router();

router.get('/', function (req, res, next) {
    res.send('welcome!')
})

module.exports = router;