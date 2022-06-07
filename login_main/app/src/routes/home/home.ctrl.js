"use strict";

const User = require("../../models/User");
const Restaurant = require("../../models/Restaurant");

const output = {
    hello: (req, res) => {
        res.render("home/index");    
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    },

    // restaurants: (req, res) => {
    //     res.render("home/restaurants");
    // }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    // restaurants: async (req, res) => {
    //     const restaurant = new Restaurant(req.body);
    //     const response = await restaurant.restaurants();
    //     return res.json(response);
    // },
        // const id = req.body.id,
        //     password = req.body.password;
        // const users = UserStorage.getUsers("id", "password");
        // // console.log(UserStorage.getUsers("id", "password","name"));
        // const response = {};

        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.password[idx] === password) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하였습니다."
        // return res.json(response); 
};

module.exports = {
    output,
    process,
};