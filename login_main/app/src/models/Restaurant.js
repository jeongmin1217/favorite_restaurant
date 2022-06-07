'use strict';
//for DB manipulate
const RestaurantStorage = require("./RestaurantStorage");

const { db } = require("../config/db");
const { logger } = require("../config/winston");
const jwt = require("jsonwebtoken");
//controller가 db에 접근하기 위해 Dao folder
//controller 실행하다가 db 접근해야하는 일 있을 때 Dao들어가서 query 실행하고 그 값을 반환
// const indexDao = require("../dao/indexDao");


class Restaurant {
    constructor(body) {
        this.body = body;
    }
}

// ex. 식당 테이블 조회
exports.readRestaurants = async function (req, res){
  const {category} = req.query;
  
  if (category) {
    const validCategory = ["한식", "중식", "일식", "양식", "분식", "구이", "회/초밥", "기타",];

    if (!validCategory.includes(category)) {
      return res.send({
        isSuccess: false,
        code: 400,
        message: "유효한 카테고리가 아닙니다.",
      });
    }
  }

  try {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      //mysql접속 관련 부분 정의하는 함수
      //es6 비구조할당
      //indexDao에 selectRestaurants 정의해줘야 함. 그리고 거기서 query문.
      const [rows] = await indexDao.selectRestaurants(connection, category);

      return res.send({
        result: rows,
        isSuccess: true,
        code: 200, // 요청 성공시 200번대 코드를 뿌려주고, 실패시 400번대 코드
        message: "식당 목록 요청 성공",
      });
    } catch (err) {
      logger.error(`readRestaurants Query error\n: ${JSON.stringify(err)}`);
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    logger.error(`readRestaurants DB Connection error\n: ${JSON.stringify(err)}`);
    return false;
  }

}