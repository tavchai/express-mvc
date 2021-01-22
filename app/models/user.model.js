const db = require('../config/db');

// constructor
const User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
};

// user all 
User.getAll = result => {
    var sql = "SELECT * FROM users";
    db.query(sql, (err, res) => {
        if (err) {
            console.log("error :" + err);
            result(null, err);
            return;
        }

        console.log("User :" + res);
        result(null, res);
    });
}


// user find id 
User.findId = (id, result) => {
    var sql = `SELECT * FROM users WHERE id = ${id}`;
    db.query(sql, (err, res) => {

        // func error 
        if (err) {
            console.log(`User find by id ${err}`);
            result(null, err);
            return;
        }

        // found User  
        if (res.length) {
            console.log(`data from user by id : ${res[0]}`);
            result(null, res[0]);
            return;
        }

        // not found User  
        result({ user: "not_found" }, null);
    });
}

module.exports = User;