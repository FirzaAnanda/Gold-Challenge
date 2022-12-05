'use strict';
const { Model, DataTypes } = require('sequelize')
const db = require('../config/config.json')
const migration = require('../migrations/20221204045348-items')
module.exports = (sequelize, DataTypes) => {
class Items extends Model { }


Items.init({
    name: {
        type: DataTypes.STRING
    },
    varian: {
        type: DataTypes.STRING
    },
    harga: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Items'
})
return Items;
module.exports = Items;
}
