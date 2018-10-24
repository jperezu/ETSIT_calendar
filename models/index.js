const path = require('path');

// Load ORM
const Sequelize = require('sequelize');


// To use SQLite data base:
//    DATABASE_URL = sqlite:calendar.sqlite
// To use  Heroku Postgres data base:
    DATABASE_URL = "postgres://stwejfnlsrfgum:c2873f05379d9357d7f4649c48f530dcdd81430e31e95ea77a543ec4ed338c4f@ec2-79-125-8-105.eu-west-1.compute.amazonaws.com:5432/dendh81kl8he0j"

const url = process.env.DATABASE_URL || "sqlite:calendar.sqlite";

const sequelize = new Sequelize(url);

// Import the definition of the Quiz Table from quiz.js
sequelize.import(path.join(__dirname, 'subject'));


// Session
sequelize.import(path.join(__dirname,'calendar'));


// Relation between models

//const {subject, group} = sequelize.models;

// Relation 1-to-N between User and Quiz:

//subject.hasMany(group, {foreignKey: 'group_id'});
//group.belongsTo(subject, {as: 'group_num', foreignKey: 'group_id'});


// Create tables
sequelize.sync()
.then(() => console.log('Data Bases created successfully'))
.catch(error => {
    console.log("Error creating the data base tables:", error);
    process.exit(1);
});


module.exports = sequelize;
