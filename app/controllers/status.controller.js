const Status = require('../models/status.model');


exports.findAll = (req, res) => {
    Status.findAll((err, data) => {
        if (err) {
            res.status(404).send({
                status: 404,
                message: `Error findAll Status`
            })
        }
        res.send(data);
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;
    Status.findById(id, (err, data) => {
        if (err) {
            res.status(404).send({
                message: `Not found status with id : ${req.params.id}`
            })
        }
        res.send(data);
    });
};

exports.create = (req, res) => {
    const newstatus = new Status({
        name: req.body.name
    });
    if (!req.body) {
        res.status(500).send({
            message: err.message
        });
    }
    Status.create(newstatus, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        res.send(data);
    });
}

exports.update = (req, res) => {
    const statusupdate = new Status({
        name: req.body.name
    });

    if (!req.params.id) {
        res.status(500).send({
            message: err.message
        });
    }

    if (!req.body) {
        res.status(500).send({
            message: err.message
        });
    }

    Status.update(req.params.id, statusupdate, (err, data) => {
        if (err) {
            res.status(404).send({
                message: err.message
            });
        }

        res.send(data);
    });
}



exports.remove = (req, res) => {
    Status.remove(req.params.id, (err, data) => {
        if (err) {
            res.status(404).send({
                message: `Delete Not found status with id : ${req.params.id}`
            });
        }

        res.send({ message: `Status was deleted successfully!` });
    });
}

