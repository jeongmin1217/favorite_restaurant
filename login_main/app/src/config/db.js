const mysql = require("mysql");
const { logger } = require("./winston");
const mysql2 = require("mysql2/promise");


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE, //schema
});

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE, //schema
});

const exampleNonTransaction = async (sql, params) => {
    try {
        const connection = await db.getConnection(async (conn) => conn);
        try {
            const [rows] = await connection.query(sql, params);
            connection.release();
        return rows;
      } catch (err) {
          logger.error(
              `example non transaction Query error\n: ${JSON.stringify(err)}`
              );
              connection.release();
              return false;
            }
        } catch (err) {
            logger.error(
                `example non transaction DB Connection error\n: ${JSON.stringify(err)}`
                );
                return false;
            }
  };
  
  const exampleTransaction = async (sql, params) => {
      try {
          const connection = await db.getConnection(async (conn) => conn);
          try {
              await connection.beginTransaction(); // START TRANSACTION
              const [rows] = await connection.query(sql, params);
              await connection.commit(); // COMMIT
              connection.release();
        return rows;
    } catch (err) {
        await connection.rollback(); // ROLLBACK
        connection.release();
        logger.error(`example transaction Query error\n: ${JSON.stringify(err)}`);
        return false;
    }
} catch (err) {
    logger.error(
        `example transaction DB Connection error\n: ${JSON.stringify(err)}`
        );
        return false;
    }
  };
  
db.connect();
 
module.exports = {
    db,
    pool: pool,
}