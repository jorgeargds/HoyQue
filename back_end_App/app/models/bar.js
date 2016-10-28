var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BarSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Bar', BarSchema);