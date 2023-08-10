import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'db4free.net',
    port: 3306,
    user: 'sensedatateste',
    password: 'sensedatateste',
    database: 'crud',
    debug: true
})
