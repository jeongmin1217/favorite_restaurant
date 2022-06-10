"use strict";
//모듈
const express = require("express");
const bodyParser = require("body-parser");
//환경변수 (운영체제간 gap 없애고자)
const dotenv = require("dotenv");
dotenv.config();
const app = express();
//라우팅
const home = require("./src/routes/home");
// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url통해 전달되는 데이터에 한글, 공백 등의 문자 오류 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); //미들웨어 등록해주는 method

module.exports = app;