// const mysql = require("mysql");
const { logger } = require("./winston");
const mysql2 = require("mysql2/promise");

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE, //schema
// });

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE, //schema
    connectionLimit: 10000,
    multipleStatements: true,
});

// db.connect();

module.exports = {
    pool: pool,
};
  
  