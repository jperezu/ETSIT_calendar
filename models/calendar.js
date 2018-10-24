
// Definition of the Quiz model:

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('calendar',
        {
            date: {
                type: DataTypes.STRING
                },
            category: {
                type: DataTypes.STRING
            },


        });
};
