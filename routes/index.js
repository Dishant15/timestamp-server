var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Timestamp Micro' });
});

// Process date view
router.get('/:date', function(req, res, next) {
    var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
    var inDate = req.params.date;
    var result = {
        "unix":null,
        "natural": null,
    };
    var naturalCheck = new Date(inDate);
    if(!isNaN(inDate) && inDate.length == 10){
        // its unix date convert to natural
        result.unix = inDate;
        var temp = new Date(parseInt(inDate,10) * 1000);
        result.natural = monthNames[temp.getMonth()] + " " + temp.getDate() + ", " + temp.getFullYear();
    } else if( naturalCheck.toDateString() != "Invalid Date" && isNaN(inDate)){
        // natural date given
        result.natural = inDate;
        result.unix = naturalCheck.getTime()/1000;
    }
    res.end(JSON.stringify(result));
});

module.exports = router;
