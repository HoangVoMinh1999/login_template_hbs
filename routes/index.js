var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  // function

  res.render('login', { title: 'login', layout:'login_layout' });
});
router.get('/',function(req,res,next){
  res.render('index',{title:'Shop'});
})
router.get('/category',function(req,res,next){
  res.render('category',{title:'Category'});
})
module.exports = router;
