var express = require('express');
var mysql = require('mysql');
var connectionDb = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'guestbook'
});

module.exports = connectionDb;
