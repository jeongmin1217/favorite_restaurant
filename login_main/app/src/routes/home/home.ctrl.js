"use strict";

const User = require("../../models/User");
// const Restaurant = require("../../models/Restaurant");

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

<<<<<<< HEAD
=======
    chat: (req, res) => {
        res.render("home/chat");
    },

>>>>>>> release_v0.2.0
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
<<<<<<< HEAD
=======
        // console.log("req.body", req.body);
>>>>>>> release_v0.2.0
        // console.log(res.json(response));
        // console.log(res.json(response).statusCode); => 이거도 잘 찍혔음.
        return res.json(response);
    },

    // restaurants: async (req, res) => {
    //     const restaurant = new Restaurant(req.body);
    //     const response = await restaurant.restaurants();
    //     return res.json(response);
    // },
};

module.exports = {
    output,
    process,
};