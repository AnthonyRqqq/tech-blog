const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
// For bcrypt use later
const SALT_ROUNDS = 15;

class User extends Model {}

// User object model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10],
            },
        },
    },
    {
        hooks: {
            // Hashes user password before sending data to database
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, SALT_ROUNDS);
                return newUserData;
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;