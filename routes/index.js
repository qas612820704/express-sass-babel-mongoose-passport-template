var express = require('express');
var router = express.Router();

/* GET home page. */

router.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'lalala',
    name: 'John'
  });
});
router.get('/ping', function(req, res, next) {
  res.send('pong!');
});


module.exports = router;
