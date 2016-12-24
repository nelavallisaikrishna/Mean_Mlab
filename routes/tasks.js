/**
 * Created by sai on 19/12/16.
 */
var express = require('express');
var router= express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://nelavallisaikrishna:omoct91991@ds139428.mlab.com:39428/nelavalli', ['tasks']);

router.get('/tasks', function (req,res, next) {
    db.tasks.find(function (err, tasks) {
        if(err){
          res.send(err);
        }
        res.json(tasks);
    })
});

module.exports = router;