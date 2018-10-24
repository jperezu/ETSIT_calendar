'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable(
            'subjects',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: Sequelize.STRING,
                },
                parcial: {
                    type: Sequelize.STRING
                },
                parcial_start: {
                    type: Sequelize.STRING
                },
                parcial_end: {
                    type: Sequelize.STRING
                },
                exam: {
                    type: Sequelize.STRING
                },
                exam_start: {
                    type: Sequelize.STRING
                },
                exam_end: {
                    type: Sequelize.STRING
                },
                group_id: {
                    type: Sequelize.INTEGER
                },
                day: {
                    type: Sequelize.STRING
                },
                start: {
                    type: Sequelize.STRING
                },
                end: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            {
                sync: {force: true}
            }
        );
    },
    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('subjects');
    }
};
