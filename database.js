import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'u456733481_sensedata',
    password: 'Sense@2023.',
    database: 'crud',
})