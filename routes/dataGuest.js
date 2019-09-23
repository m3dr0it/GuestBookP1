var express = require('express');
var router = express.Router();
var connectionDb = require('./connectionDb');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  connectionDb.query("select * from `guest-book`",function(err,result) {
    if (err) {
      console.log(err);
      res.render('data-guest',{err});
    }else {
      console.log(result);
      res.render('data-guest',{data : result});
    }
  })

});

module.exports = router;
