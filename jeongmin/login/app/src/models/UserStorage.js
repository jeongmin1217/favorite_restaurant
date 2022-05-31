'use strict';

class UserStorage {
    //더미데이터
    // # = private 변수로 은닉화
    static #users = {
        id: ["jeongmin", "jumi"],
        password: ["1234", "1234"],
        name: ["정민", "주미"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;