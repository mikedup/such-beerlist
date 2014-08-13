var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BeerSchema   = new Schema({
	data: Object
});

module.exports = mongoose.model('Beer', BeerSchema);