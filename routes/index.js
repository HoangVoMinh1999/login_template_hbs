var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add_product', function(req, res, next) {
  // function

  res.render('login', { title: 'Express', layout:'login_layout' });
});

module.exports = router;
