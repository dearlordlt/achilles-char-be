const express = require('express');
const router = express.Router();

// middleware
router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.get('/',  (req, res) => {
  res.json([
      {"id":"000001", "name":"humulupu", "author": "admin", "created": "2016-01-01 00:00:00", "updated": "2016-05-21 22:20:01"},
      {"id":"000002", "name":"grynas", "author": "admin", "created": "2017-01-01 00:00:00", "updated": "2017-04-05 15:00:45"},
      {"id":"000003", "name":"simkala", "author": "guest", "created": "2018-01-01 00:00:00", "updated": "2018-02-01 00:00:01"},
      {"id":"000004", "name":"viržinis", "author": "saras", "created": "2018-02-01 00:00:00", "updated": "2018-03-01 00:00:01"}
    ]);
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