'use strict';

const { pool } = require("../config/db");

 //for DB CRUD


class UserStorage {
    constructor(body) {
        this.body = body;
        // this.connection = await pool.getConnection(async (conn) => conn);
    }
    
    // static getUsers(isAll, ...fields) {}
    static async getUserInfo(connection, id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            connection.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                // console.log(data[0]);
                resolve(data[0]);
                pool.releaseConnection(conn);
            });
        });
    }

    static async save (connection, userInfo) {
        const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
        try {
            const [rows] = await connection.query({
                    sql: query,
                    timeout: 30000,
                    values: [userInfo.id, userInfo.name, userInfo.password]
            });
            // console.log(fields);
            if (rows.affectedRows) {
                return {success: true};
            } else {
                return {success: false};
            }
        } catch (error) {
            console.log(error);
        }
   }
   
}
// static getUserInfo(id) {
//     return new Promise((resolve, reject) => {
//         const query = "SELECT * FROM users WHERE id = ?;";
//         pool.query(query, [id], (err, data) => {
//             if (err) reject(`${err}`);
//             // console.log(data[0]);
//             resolve(data[0]);
//         });
//     });
// }

module.exports = UserStorage;