'use strict';
//for DB manipulate
const UserStorage = require("./UserStorage");
const {pool} = require("../config/db");
const { logger } = require("../config/winston");
const jwt = require("jsonwebtoken");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
    
        try {
          const connection = await pool.getConnection(async (conn) => conn);
          try {
            const { id, password } = await UserStorage.getUserInfo(
              connection,
              client.id
            );
            if (id) {
              if (id === client.id && password === client.password) {
                return { success: true };
              }
              return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
          } catch (err) {
            return { success: false, msg: err };
          } finally {
            connection.release();
          }
        } catch (err) {
          logger.error(`login DB Connection error\n: ${JSON.stringify(err)}`);
          return false;
        }
      }
       
    async register() {
        const client = this.body;
        try {
            const connection = await pool.getConnection(async (conn) => conn);
            // console.log(client);
            try {
                const response = await UserStorage.save(connection, client);
                // console.log("테스트2 : ", response);
                return response;
            } catch (err) {
                console.log(err);
                return {success: false, msg : err};
            } finally {
                connection.release();
            }
        } catch (err) {
            logger.error(`usersaving DB Connection error\n: ${JSON.stringify(err)}`);
            return false;
        }
    }
}
module.exports = User;
