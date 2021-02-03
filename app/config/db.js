const mysql = require('mysql');

// Connect DB 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "restapi-users"
});

db.connect((err) => {
    if (err) console.log(err);
    console.log("Connect DB Success!!!");
});

module.exports = db;