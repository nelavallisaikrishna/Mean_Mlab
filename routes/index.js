/**
 * Created by sai on 19/12/16.
 */

var express = require('express');
var router= express.Router();

router.get('/', function (req,res, next) {
    console.log('req --------------' + JSON.stringify(res.body));
    res.render('index.html');
});

module.exports = router;
