const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_learning',
    password: 'BeastlyBear195'
})

module.exports = pool.promise()