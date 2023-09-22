module.exports = app => {
    const desainer = require("../controllers/desainer.controller.js");

    var router = require("express").Router();

    // Create a new Desainer
    router.post("/", desainer.create);

    // Retrieve all Desainer
    router.get("/", desainer.findAll);

    // Retrieve all published Desainer
    router.get("/published", desainer.findAllPublished);

    // Retrieve a single Desainer with id
    router.get("/:id", desainer.findOne);

    // Update a Desainer with id
    router.put("/:id", desainer.update);

    // Delete a Desainer with id
    router.delete("/:id", desainer.delete);

    // Delete all Desainer
    router.delete("/", desainer.deleteAll);

    app.use('/api/desainers', router);
};