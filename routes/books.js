var router = require('express').Router();

router.get('/', function(req, res){
  res.send('books are cool');
});

module.exports = router;
