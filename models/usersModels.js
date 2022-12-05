'use strict';
const { Model, DataTypes } = require('sequelize')
const db = require('../config/config.json')
const migration = require('../migrations/20221204045312-users')
module.exports = (sequelize, DataTypes) => {
class Users extends Model { }

Users.init({
    username: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Users'
})
return Users;
module.exports = Users;
}



