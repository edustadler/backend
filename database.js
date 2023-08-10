import mysql from "mysql"

export const db = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'sensedatateste',
    password: 'sensedatateste',
    database: 'crud',
})