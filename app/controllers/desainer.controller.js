const db = require('../models');
const Desainer = db.desainers;
const Op = db.Sequelize.Op;

// Create and Save a new Desainer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.desainer_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Desainer
    const desainer = {
        desainer_name: req.body.desainer_name,
        desainer_category: req.body.desainer_category,
        desainer_description: req.body.desainer_description,
        desainer_rating: req.body.desainer_rating,
        desainer_project_done: req.body.desainer_project_done,
        desainer_contact: req.body.desainer_contact,
        desainer_address: req.body.desainer_address,
        desainer_city: req.body.desainer_city,
        desainer_province: req.body.desainer_province,
        desainer_status: req.body.desainer_status
    };

    // Save Desainer in the database
    Desainer.create(desainer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Desainer."
            });
        });
};

// Retrieve all Desainer from the database.
exports.findAll = (req, res) => {
    const desainer_id = req.query.desainer_id;
    var condition = desainer_id ? { desainer_id: { [Op.like]: `%${desainer_id}%` } } : null;

    Desainer.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send ({
                message:
                    err.message || "Some error occurred while retrieving desainer."
            });
        });
};

// Find a single Desainer with an id
exports.findOne = (req, res) => {
    const desainer_id = req.params.id;

    Desainer.findByPk(desainer_id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send ({
                message: "Error retrieving Desainer with id=" + desainer_id
            });
        });
};

// Update a Desainer by the id in the request
exports.update = (req, res) => {
    const desainer_id = req.params.desainer_id;

    Desainer.update(req.body, {
        where: { desainer_id: desainer_id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Desainer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Desainer with id=${desainer_id}. Maybe Desainer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send ({
                message: "Error updating Desainer with id=" + desainer_id
            });
        });
};

// Delete a Desainer with the specified id in the request
exports.delete = (req, res) => {
    const desainer_id = req.params.desainer_id;

    Desainer.destroy({
        where: { desainer_id: desainer_id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Desainer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Desainer with id=${desainer_id}. Maybe Desainer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send ({
                message: "Could not delete Desainer with id=" + desainer_id
            });
        });
};

// Delete all Desainer from the database.
exports.deleteAll = (req, res) => {
    Desainer.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Desainer were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send ({
                message:
                    err.message || "Some error occurred while removing all desainer."
            });
        });
};

// Find all published Desainer
exports.findAllPublished = (req, res) => {
    Desainer.findAll({ where: { desainer_status: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send ({
                message:
                    err.message || "Some error occurred while retrieving desainer."
            });
        });
};