module.exports = (sequelize, Sequelize) => {
    const Desainer = sequelize.define("desainer", {
        desainer_id: {
            type: Sequelize.INTEGER
        },

        desainer_name: {
            type: Sequelize.STRING
        },

        desainer_category: {
            type: Sequelize.INTEGER
        },

        desainer_description: {
            type: Sequelize.STRING
        },

        desainer_rating: {
            type: Sequelize.INTEGER
        },

        desainer_project_done: {
            type: Sequelize.INTEGER
        },

        desainer_contact: {
            type: Sequelize.STRING
        },

        desainer_address: { 
            type: Sequelize.STRING
        },

        desainer_city: {
            type: Sequelize.STRING
        },

        desainer_province: {
            type: Sequelize.STRING
        },

        desainer_status: {
            type: Sequelize.INTEGER
        },
    });

    return Desainer;
};