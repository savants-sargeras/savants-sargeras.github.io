const express = require('express');
const router = express.Router();
const config = require('../config.js');

router.get('/', function(req, res, next) {
  // GET/users/ route
  res.send({name:config.admin.name});
});

router.get('/test', function(req, res, next) {
  // GET/users/ route
  // res.send({name:config.admin.name});
  console.log(res);
});

module.exports = router;
