const Shoe = require('./database.js');
// const Shoe = require('./schema.js')
const data = require('../../shoes.json');

var insertSeedData = function () {
    Shoe.insertMany(data)
        .then(() => {
            console.log('seeded')
        })
        .catch((err) => console.log(err))
}

insertSeedData();