import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'db4free.net',
    user: 'sensedatateste',
    password: 'sensedatateste',
    database: 'crud',
})