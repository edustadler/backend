import mysql from "mysql"

export const db = mysql.createConnection({
    host: '85.10.205.173',
    user: 'sensedatateste',
    password: 'sensedatateste',
    database: 'crud',
})