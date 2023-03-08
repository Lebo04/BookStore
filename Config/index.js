require('dotenv').config();

const { createPool } = require('mysql');

let connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    password: process.env.dbPwd,
    user: process.env.dbUser,
    port: process.env.dbPort,
    multipleStatements: true
})

module.exports = connection;