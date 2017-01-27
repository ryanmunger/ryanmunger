var express = require('express');
var router = express.Router();

/* GET resume page. */
router.get('/', function(req, res, next) {
  res.render('pages/resume', { title: 'Resume' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('pages/portfolio', { title: 'Portfolio' });
});

module.exports = router;
