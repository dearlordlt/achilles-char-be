var express = require('express');
var router = express.Router();

// middleware
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/',  (req, res) => {
  res.json({"users": "hey"});
});

router.get('/about', (req, res) => {
  res.json({"users": { "about": "hey" }});
});

module.exports = router