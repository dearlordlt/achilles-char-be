const express = require('express');
const morgan = require('morgan');
const R = require('ramda');
const bodyParser = require('body-parser');
const auth = require('http-auth');

/**
 * AUTH
 */
const basic = auth.basic({
    realm: "Super slaptai viskas!",
    file: __dirname + "/httpasswd/.httpasswd"
});

const app = express();
const authMiddleware = auth.connect(basic);

/**
 * MIDDLEWARE
 */
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

/**
 * CONFIG
 */
const urlPrefix = '/api/v1';
const port = process.argv[2] || 3000;
const host = process.argv[3] || 'localhost';

/**
 * ROUTES
 */
app.use(`${urlPrefix}/users`, authMiddleware, require('./routes/users'));
app.use(`${urlPrefix}/login`, authMiddleware, require('./routes/login'));
app.use(`${urlPrefix}/characters`, authMiddleware, require('./routes/characters'));

/**
 * PING
 */
app.get(`${urlPrefix}`, (req, res) => res.send('Hello World!'));

/**
 * SERVER
 */
app.listen(port, () => console.log(`Listening on port ${port}! *http://${host}:${port}/api/v1/*`)); 