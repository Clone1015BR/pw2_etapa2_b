const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('../models/User')

const Thougth = db.define('THOUGHT', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Thougth.belongsTo(User)
User.hasMany(Thougth)