var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var SupportsSchema = new Schema({
        supports: [String]
    }, 
    {
        versionKey: false
    }
);

module.exports = mongoose.model('SupportsModel', SupportsSchema);
