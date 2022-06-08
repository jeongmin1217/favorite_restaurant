'use strict';
 //for DB CRUD
const pool = require("../config/db");

class UserStorage {
    constructor(body) {
        this.body = body;
    }
    // static getUsers(isAll, ...fields) {}
    static async getUserInfo(connection, id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            connection.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                // console.log(data[0]);
                resolve(data[0]);
            });
        });
    }

    static async save(connection, userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
             connection.query(
                query, 
                [userInfo.id, userInfo.name, userInfo.password],
                (err, data) => {
                    if (err) reject(`${err}`);
                    // console.log(data[0]);
                    resolve({ success: true});
                }
            );
        });
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