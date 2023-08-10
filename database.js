import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'sensedatateste',
    password: 'sensedatateste',
    database: 'crud',
})