import mysql from "mysql"

export const db = mysql.createConnection({
    host: '85.10.205.173:3306',
    user: 'sensedata',
    password: 'sensedatateste',
    database: 'crud',
})