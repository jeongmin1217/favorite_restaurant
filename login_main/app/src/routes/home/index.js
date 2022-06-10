"use strict";

const express = require("express");
const router = express.Router();
const jwtMiddleware = require("../../config/jwtMiddleware");
// const Restaurant = require("../../models/Restaurant");

const ctrl = require("./home.ctrl");
<<<<<<< HEAD
=======
const index = require("../../models/Restaurant");
>>>>>>> release_v0.2.0

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
<<<<<<< HEAD
=======
router.get("/restaurants", index.readRestaurants);
router.get("/chat", ctrl.output.chat);
>>>>>>> release_v0.2.0
// router.get("/restaurants", Restaurant.restaurants);
// router.get("/restaurants", ctrl.output.restaurants);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;