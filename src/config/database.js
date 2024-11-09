require('dotenv').config()
var Pool = require('pg-pool')
const { Client } = require('pg');

// const connection = new Client({
//     host: process.env.HOST_NAME,
//     user: process.env.DB_USER,
//     port: process.env.DB_PORT, password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })

var pool = new Pool({
    host: process.env.HOST_NAME,
    user: process.env.DB_USER,
    port: process.env.DB_PORT, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: false,
    max: 20,
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    maxUses: 7500,
})

module.exports = pool;

// module.exports = connection;