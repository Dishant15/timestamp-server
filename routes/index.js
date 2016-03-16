var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Timestamp Micro' });
});

// Process date view
router.get('/:date', function(req, res, next) {
  res.end(JSON.stringify({date:req.params.date}));
});

module.exports = router;
