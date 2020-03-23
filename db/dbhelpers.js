var Shoe = require('./index.js');

var helpers = {
    get: () => Shoe.find({}),
    getOne: (id) => Shoe.findById("5e7807bb5c97c95b93904811")
}

module.exports = helpers