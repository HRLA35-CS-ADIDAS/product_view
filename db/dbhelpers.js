var Shoe = require('./index.js');

var helpers = {
    get: () => Shoe.find({}),
    getOne: (id) => Shoe.findById(id)
}

module.exports = helpers