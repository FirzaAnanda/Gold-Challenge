'use strict';
const { Model, DataTypes } = require('sequelize')
const db = require('../config/config.json')
const migration = require('../migrations/20221204045335-orders')
module.exports = (sequelize, DataTypes) => {
class Orders extends Model { }


Orders.init({
    name: {
        type: DataTypes.STRING
    },
    varian: {
        type: DataTypes.STRING
    },
    jumlah: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Orders'
})
return Orders;
module.exports = Orders;
}
