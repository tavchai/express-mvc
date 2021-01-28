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
User.findById = (id, result) => {
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

// create user 
User.create = (newUser, result) => {
    db.query(`INSERT INTO users SET ?`, newUser, (err, res) => {
        if (err) {
            console.log("err" + err);
            result(null, err);
        }
        console.log("created Users: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
}

// update user
User.updateById = (id, user, result) => {
    var sql = `UPDATE users SET USERNAME = ? , EMAIL = ? WHERE id = ${id}`;
    var values = [user.username, user.email];
    db.query(sql, values, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found users with the id
            result({ userid: "not_found" }, null);
            return;
        }

        console.log("updated uers: ", { id: id, ...user });
        result(null, { id: id, ...user });
    });
}

// delete user by id
User.deleteById = (id, result) => {
 
    db.query("DELETE FROM users WHERE id = ?",id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found user with the id
            result({ userid: "not_found" }, null);
            return;
        }
 
        console.log("deleted user with id: "+ id);
        result(null, res);
    })
}

module.exports = User;