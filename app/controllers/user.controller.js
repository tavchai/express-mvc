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
    User.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(404).send({
                message: `Not found User with id ${req.params.id}.`
            });
        }
        res.send(data);
    })
};

exports.create = (req, res) => {

    // validate data 
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // create users 
    const users = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    // save User 
    User.create(users, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        }
        res.send(data);
    });
}

// update user by id 
exports.updateUserById = (req, res) => {
    var id = req.params.id;
    if (!id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = new User({
        username: req.body.username,
        email: req.body.email
    });

    User.updateById(id, user, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
}

exports.deleteById = (req, res) => {
    var id = req.params.id;
    if (!id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    User.deleteById(id, (err, data) => {
        if (err) {
            res.status(404).send({
                message: `Not found Customer with id ${id}.`
            });
        }
        res.send({ message: `Customer was deleted successfully!` });
    }); 
}