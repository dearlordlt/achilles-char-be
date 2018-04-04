const express = require('express');
const app = express();
const R = require('ramda');

/**
 * 
 */
const urlPrefix = '/api/v1';
const port = process.argv[2] || 3000;

/**
 * ROUTES
 */
const users = require('./routes/users');

/**
 * 
 */
app.use(`${urlPrefix}/users`, users);

/**
 * PING
 */
app.get(`${urlPrefix}`, (req, res) => res.send('Hello World!'));

/**
 * SERVER
 */
app.listen(port, () => console.log(`Listening on port ${port}! *http://localhost:${port}/api/v1/*`));