const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mysql_project',
  port: 3306,
  password: process.env.DB_PASSWORD,
}).promise();

module.exports = pool;
