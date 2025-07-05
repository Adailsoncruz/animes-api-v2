const { DataTypes } = require('sequelize');
const sequelize = require("../config/database")

const Animes = sequelize.define("Animes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        validate:{
            len: {
                args: [0, 500],
                msg: "Description must be less than 500 characters"
            }
        }
    },
    image: {
        type: DataTypes.TEXT
    },
    episodes: {
        type: DataTypes.INTEGER
    }
})

module.exports = Animes;