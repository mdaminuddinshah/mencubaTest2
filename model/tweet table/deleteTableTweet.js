import { passport } from "../../database/Database.js";

const query =  `
    DROP TABLE IF EXISTS tweet
`;

const deleteTableTweet = async () => {
    await passport.query(query);
};

export default deleteTableTweet;