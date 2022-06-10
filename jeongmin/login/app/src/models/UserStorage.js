'use strict';
//for DB CRUD
const db = require("../config/db");


class UserStorage {    
    // static getUsers(isAll, ...fields) {
    // }

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                // console.log(data[0]);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
            db.query(
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

module.exports = UserStorage;