

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('subject',
        {
            name: {
                type: DataTypes.STRING
            },
            parcial: {
                type: DataTypes.DATE
            },
            parcial_start: {
                type: DataTypes.STRING
            },
            parcial_end: {
                type: DataTypes.STRING
            },
            exam: {
                type: DataTypes.DATE
            },
            exam_start: {
                type: DataTypes.STRING
            },
            exam_end: {
                type: DataTypes.STRING
            },
       		 group_id: {
                type: DataTypes.INTEGER
            },
            day: {
                type: DataTypes.STRING,
            },
            start: {
                type: DataTypes.STRING,
            },
            end: {
                type: DataTypes.STRING,
            },

        });
};
