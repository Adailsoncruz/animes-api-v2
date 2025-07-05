const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

const Favorite = sequelize.define('Favorite', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true    
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',  
            key: 'id'
        }
    },
    animeId: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Animes',  
            key: 'id'
        }
    }
})

module.exports = Favorites   