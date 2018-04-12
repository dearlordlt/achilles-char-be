const express = require('express');
const router = express.Router();

// middleware
router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/',  (req, res) => {
  res.json(require("../data/skills_ncg.json"));
});

module.exports = router;