"use strict";
//모듈
const express = require("express");
const bodyParser = require("body-parser");
//환경변수 (운영체제간 gap 없애고자)
const dotenv = require("dotenv");
dotenv.config();

const compression = require("compression");
const methodOverride = require("method-override");
var cors = require("cors");
const { logger } = require("./src/config/winston");
//app이라는 express 객체 생성
const app = express();
//라우팅
const home = require("./src/routes/home");

const port = 3000;

const jwtMiddleware = require("./src/config/jwtMiddleware");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url통해 전달되는 데이터에 한글, 공백 등의 문자 오류 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression()); // HTTP 요청을 압축 및 해제
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());

app.use("/", home); //미들웨어 등록해주는 method
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);

module.exports = app;