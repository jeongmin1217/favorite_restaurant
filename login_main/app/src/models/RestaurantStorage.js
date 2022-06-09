'use strict';
//for DB CRUD
// const db = require("../config/db");
const { pool } = require("../config/db");

exports.selectRestaurants = async function (connection, category) {

        const selectAllRestaurantsQuery = `select title, address, category from restaurants where status='A';`;
        const selectCategorizedRestaurantsQuery = `select title, address, category from restaurants where status='A' and category=?;`;
        
        const Params = [category];
        
        const Query = category ? selectCategorizedRestaurantsQuery : selectAllRestaurantsQuery;
        
        const rows = await connection.query(Query, Params);
        
        return rows;
    
}