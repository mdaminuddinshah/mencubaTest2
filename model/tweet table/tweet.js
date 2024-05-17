import { passport } from "../../database/Database.js";

const queryTableTweet = `
    CREATE TABLE IF NOT EXISTS tweet(
        id SERIAL PRIMARY KEY,
        fieldname VARCHAR(255) NOT NULL,
        originalname VARCHAR(255) NOT NULL,
        encoding VARCHAR(255) NOT NULL,
        mimetype VARCHAR(255) NOT NULL,
        destination VARCHAR(255) NOT NULL,
        filename VARCHAR(255) NOT NULL,
        path TEXT,
        size INT
    )
`;

const createTableTweet = async () => {
    await passport.query(queryTableTweet);
};

export default createTableTweet;