var mongoose = require('mongoose');
var ADLModel = mongoose.model('ADLModel');

exports.load_all_adl = function(req, res) {
    ADLModel.find().then(function(err, adl) {
        if (err) {
            res.send(err);
        } else {
            res.json(adl);
        }
    });

};

exports.load_adl = function(req, res) {
    var activity = req.params.activity;
    var date = req.params.date;

    if (date) {
        ADLModel.find({activity:activity, date:date}, function(err, adl) {
            if (err) {
                res.send(err);
            } else {
                res.json(adl);
            }
        });
    } else {
        ADLModel.find({activity:activity}, function(err, adl) {
            if (err) {
                res.send(err);
            } else {
                res.json(adl);
            }
        });
    }
};

exports.create_adl = function(req, res) {
    var new_adl = new ADLModel();

    new_adl.uid = req.body.uid;
    new_adl.activity = req.body.activity;
    new_adl.time = req.body.time;
    new_adl.count = req.body.count;
    new_adl.date = req.body.date;
    new_adl.timestamp = req.body.timestamp;

    new_adl.save(function(err, adl) {
        if (err) {
            res.send(err);
        } else {
            res.json(adl);
        }
    });
}

exports.update_adl = function(req, res) {
    var _id = req.params.id;

    ADLModel.findById(_id, function(err, adl) {
        if (err) {
            res.send(err);
        } else {
            adl.uid = req.body.uid;
            adl.activity = req.body.activity;
            adl.time = req.body.time;
            adl.count = req.body.count;
            adl.timestamp = req.body.timestamp;

            if (req.body.date) {
                adl.date = req.body.date;
            }

            adl.save(function(err, ret) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(ret);
                }
            });
        }
    });

}

exports.delete_adl = function(req, res) {
    var _id = req.params.id;
    
    ADLModel.findById(_id, function(err, ret) {
        if (err) {
            res.send(err);
        } else {
            ADLModel.deleteOne({ _id: _id }).then(function() {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: "Success!" });
                }
            });
        }
    });
}
