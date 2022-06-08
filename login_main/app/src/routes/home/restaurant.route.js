module.exports = function (app) {
    //controller갖고있는 모듈 생성
    const index = require("../../models/Restaurant");
    const jwtMiddleware = require("../../config/jwtMiddleware");
        
    // 식당 목록 조회
    app.get("/restaurants", index.readRestaurants);
    // const express = require("express");
    // const router = express.Router();
    // const ctrl = require("./home.ctrl");
    
    // router.get("/", ctrl.output.hello);
    // router.get("/login", ctrl.output.login);
    // router.get("/register", ctrl.output.register);
    

    // router.post("/login", ctrl.process.login);
    // router.post("/register", ctrl.process.register);

    // module.exports = router;
  };
  