const db = require('../config/db');

const Status = function (status) {
    this.name = status.name
}

Status.findAll = result => {
    const sql = `SELECT * FROM m_status`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(`find all Status is error ${err}`);
            return result(null, err);
        }

        return result(null, res);
    });
}

Status.findById = (id, result) => {
    const sql = `SELECT * FROM m_status where id = ${id}`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(`find Status by ID is error ${err}`);
            return result(null, err);
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found status  
        result({ status: "not_found" }, null);
    })

}

Status.create = (newstatus, result) => {
    db.query(`INSERT INTO m_status SET ?`, newstatus, (err, res) => {
        if (err) {
            console.log("err" + err);
            result(null, err);
            return;
        }
        console.log("created Staus: ", { id: res.insertId, ...newstatus });
        result(null, { id: res.insertId, ...newstatus });
    })
}

Status.update = (id, statusdata, result) => {
    const sql = `UPDATE m_status SET name = ? WHERE id = ${id}`;
    const values = [statusdata.name];
    db.query(sql, values, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found status with the id
            result({ statusid: "not_found" }, null);
            return;
        }

        result(null, { id: id, ...statusdata });
        console.log("Update Status : ", { id: id, ...statusdata });
    })
}

Status.remove = (id, result) => {
    db.query(`delete from m_status where id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found status with the id
            result({ statusid: "not_found" }, null);
            return;
        }

        result(null, res);
        console.log(`remove to id ${id}`);
    })
}

module.exports = Status;