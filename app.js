const express = require('express');
const app = express();
const R = require('ramda');

app.get('/api/v1/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Listening on port 3000! *http://localhost:3000/api/v1/*'));