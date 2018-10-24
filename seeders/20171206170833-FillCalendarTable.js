'use strict';

module.exports = {
    up(queryInterface, Sequelize) {

        return queryInterface.bulkInsert('calendars', [
            {
                date: "9/4/2018",
                category: "start-nextday",
                createdAt: new Date(),
                updatedAt: new Date()
            },
             {
                date: "12/22/2018",
                category: "end",
                createdAt: new Date(),
                updatedAt: new Date()
            },
             {
                date: "10/9/2018",
                category: "VIERNES",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "10/24/2018",
                category: "VIERNES",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "11/7/2018",
                category: "VIERNES",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "9/24/2018",
                category: "festivo",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "10/12/2018",
                category: "festivo",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "11/1/2018",
                category: "festivo",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "11/2/2018",
                category: "festivo",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "11/9/2018",
                category: "festivo",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "12/6/2018",
                category: "festivo",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                date: "12/7/2018",
                category: "festivo",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down(queryInterface, Sequelize) {

        return queryInterface.bulkDelete('calendars', null, {});
    }
};
