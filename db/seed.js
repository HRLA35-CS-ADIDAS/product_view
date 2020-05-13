var mongoose = require('mongoose');
const Shoe = require('./index.js');
const data = require('../shoes.json');

var insertSeedData = function () {
    Shoe.insertMany(data)
        .then(() => mongoose.connection.close())
        .catch((err) => console.log(err))
}

insertSeedData();