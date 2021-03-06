const { Sequelize } = require('sequelize');

module.exports = new Sequelize('codingschool', 'clemens', '', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});



// Database Connection (via package mariadb)

// const mariadb = require('mariadb');

// const pool = mariadb.createPool({
//   host: '127.0.0.1',
//   port: '3306',
//   user: 'clemens', 
//   database: 'codingschool',
//   password: '',
//   connectionLimit: 5
// });


// async function asyncFunction() {
// let conn;
// try {
// conn = await pool.getConnection();
// const rows = await conn.query("SELECT 1 as val");
// console.log(rows); //[ {val: 1}, meta: ... ]
// const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
// console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
// const user = await conn.query("select user,host from mysql.user;")
// } catch (err) {
// throw err;
// } finally {
// if (conn) return conn.end();
// }
// };

// asyncFunction();

// async function logAllCourses () {
// let conn;
// try {
// conn = await pool.getConnection();
// const courses = await conn.query({rowsAsArray: true, sql: "SELECT name FROM courses;"})
// courses.forEach(x => console.log(x[0]));
// } catch (err) {
//  throw err;
// } finally {
//  if (conn) return conn.end();
// }
// };

// logAllCourses();


// https://github.com/mariadb-corporation/mariadb-connector-nodejs/blob/master/documentation/promise-api.md#array-result-sets