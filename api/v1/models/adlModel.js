var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var ADLSchema = new Schema({
        uid: Number,
        date: String,
        activity: String,
        time: Number,
        count: Number,
        timestamp: [{
            start: String,
            end: String,
            time: Number  
        }]
    }, 
    {
        versionKey: false
    }
);

module.exports = mongoose.model('ADLModel', ADLSchema);
