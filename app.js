const express = require('express');
const morgan = require('morgan')
const R = require('ramda');
const bodyParser = require('body-parser');

const app = express();

/**
 * MIDDLEWARE
 */
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * CONFIG
 */
const urlPrefix = '/api/v1';
const port = process.argv[2] || 3000;
const host = process.argv[3] || 'localhost';

/**
 * ROUTES
 */
const users = require('./routes/users');
app.use(`${urlPrefix}/users`, users);

/**
 * PING
 */
app.get(`${urlPrefix}`, (req, res) => res.send('Hello World!'));

/**
 * SERVER
 */
app.listen(port, () => console.log(`Listening on port ${port}! *http://${host}:${port}/api/v1/*`));