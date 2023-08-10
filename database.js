import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    port: 3306,
    user: 'sql10638895',
    password: 'uk2SPVdHgM',
    database: 'crud',
    debug: true
})
