import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'http://85.10.205.173:3307',
    user: 'sensedatateste',
    password: 'sensedatateste',
    database: 'crud',
})