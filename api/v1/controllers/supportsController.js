var mongoose = require('mongoose');
var SupportsModel = mongoose.model('SupportsModel');

exports.load_supports= function(req, res) {
    SupportsModel.find().then(function(err, ret) {
        if (err) {
            res.send(err);
        } else {
            res.json(ret);
        }
    });

};

exports.create_supports = function(req, res) {
    var new_supports = new SupportsModel();
    
    new_supports.supports = req.body.supports;

    new_supports.save(function(err, ret) {
        if (err) {
            res.send(err);
        } else {
            res.json(ret);
        }
    });
}

exports.update_supports = function(req, res) {
    var _id = req.params.id;

    SupportsModel.findById(_id, function(err, supports) {
        if (err) {
            res.send(err);
        } else {
            supports.supports = req.body.supports;

            supports.save(function(err, ret) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(ret);
                }
            });
        }
    });

}

exports.delete_supports= function(req, res) {
    var _id = req.params.id;
    
    SupportsModel.findById(_id, function(err, ret) {
        if (err) {
            res.send(err);
        } else {
            SupportsModel.deleteOne({ _id: _id }).then(function() {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: "Success!" });
                }
            });
        }
    });
}
