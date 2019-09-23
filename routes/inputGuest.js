var express = require('express');
var router = express.Router();
var connectionDb = require('./connectionDb');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  connectionDb.query("INSERT INTO `guest-book`(`nama`, `perusahaan`, `email`) VALUES ('"+req.body.nama+"','"+req.body.perusahaan+"','"+req.body.email+"');",function(err,rows) {
    console.log(rows);
  })
  res.render('thanks');
});

module.exports = router;
