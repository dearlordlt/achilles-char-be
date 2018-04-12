const express = require('express');
const router = express.Router();

// middleware
router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/',  (req, res) => {
  res.json(["dundulis"]);
});

router.get('/:charid', (req, res) => {
  res.json(require("../data/character.json"));
});

router.patch('/:charid', (req, res) => {
    res.json(require("../data/character.json"));
});

router.delete('/:charid', (req, res) => {
    res.json({"deleted": "success"});
});

router.post('/:charid', (req, res) => {
    res.json(require("../data/character.json"));
});

module.exports = router;