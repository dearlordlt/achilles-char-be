var express = require('express');
var router = express.Router();

// middleware
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/',  (req, res) => {
  res.send('Users');
});

router.get('/about', (req, res) => {
  res.send('Users/about');
});

module.exports = router