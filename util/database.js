const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'node_learning', 
    'root', 
    'node_learning', 
    {
        host: "localhost",
        dialect: "mysql",
        // logging: function () {},
        // pool: {
        //     max: 5,
        //     min: 0,
        //     idle: 10000
        // },
        // dialectOptions: {
        //     socketPath: "/var/run/mysqld/mysqld.sock"
        // },
        // define: {
        //     paranoid: true
        // }
    }
    )

module.exports = sequelize

/* VESTIGIAL

const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_learning',
    password: 'BeastlyBear195'
})

module.exports = pool.promise()
*/