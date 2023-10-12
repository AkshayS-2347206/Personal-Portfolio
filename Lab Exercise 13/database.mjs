import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password: 'password',
    database:'notes_app3'
}).promise();

const result = await pool.query("select * from notes4")
console.log(result)