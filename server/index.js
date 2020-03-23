const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('./db/database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`You are listening on port ${port}!`))