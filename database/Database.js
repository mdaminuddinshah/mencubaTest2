import pg from "pg";
import "dotenv/config";
import createTableTweet from "../model/tweet table/tweet.js";
// import alterTableTweet from "../model/tweet table/alterTableTweet.js";
// import deleteTableTweet from "../model/tweet table/deleteTableTweet.js";


const { Pool } = pg;


export const passport = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

export const DatabaseConnection = async () => {
    try{
        await passport.query("SELECT NOW()");
        console.log("DB CONNECTED");

        createTableTweet();
        // alterTableTweet();
        // deleteTableTweet();
    } catch(err){
        console.log("DB FAILED")
    }
};