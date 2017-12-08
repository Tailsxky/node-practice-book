var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('/:username', function(req, res, next) {
  console.log("all captured");
  //res.send('respond with a resource ' + req.params.username);
  next();
});

router.get('/:username', function(req, res, next) {
	console.log('get captured');
  res.send('respond with a resource ' + req.params.username);
});


module.exports = router;
