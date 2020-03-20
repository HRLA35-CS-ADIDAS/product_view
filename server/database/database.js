var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoes', { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.Promise = global.Promise;

var shoeSchema = mongoose.Schema({
    image: String,
    url: String,
    name: String,
    name_url: String,
    type: String,
    type_url: String,
    price: String,
    price_url: String
})

var Shoe = mongoose.model('Shoe', shoeSchema)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});

// module.exports = db;
module.exports = Shoe;