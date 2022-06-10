module.exports = function (app) {
    //controller갖고있는 모듈 생성
    const index = require("../../models/Restaurant");
    // const user = require("../../models/User");
    const jwtMiddleware = require("../../config/jwtMiddleware");
        
    // 식당 목록 조회
    app.get("/restaurants", index.readRestaurants);
  };
  