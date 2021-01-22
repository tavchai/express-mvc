const User = require('../models/user.model');

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });

        }
        res.send(data);
    });
};

exports.findById = (req, res) => {
    User.findId(req.params.id, (err, data) => {
        if (err) {
            res.status(404).send({
                message: `Not found User with id ${req.params.id}.`
            });
        }
        res.send(data);
    })
};