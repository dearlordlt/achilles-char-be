const express = require('express');
const router = express.Router();

// middleware
router.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

router.get('/:type/:name/:isCustom',  (req, res) => {
    console.log(JSON.stringify(req.params, null, 2));
    let weapons = require("../data/weapons.json");
    if(req.params.type) {
        weapons = weapons.filter(weapon => {
            return weapon.type === req.params.type;
        });
    }
    if(req.params.name) {
        weapons = weapons.filter(weapon => {
            return weapon.name.indexOf(req.params.name) > -1;
        });
    }
    if(req.params.isCustom !== 'all') {
        weapons = weapons.filter(weapon => {
            return weapon.isCustom === req.params.isCustom;
        });
    }
    res.json(weapons);
});

router.post('/',  (req, res) => {
    res.json({"success":"done"});
});

module.exports = router;