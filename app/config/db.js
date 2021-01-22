const mysql = require('mysql');

// Connect DB 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_login"
});

db.connect((err) => {
    if (err) console.log(err);
    console.log("Connect DB Success!!!");
});

module.exports = db;