import { passport } from "../../database/Database.js";

const query = `
    ALTER TABLE tweet ADD created_at TIMESTAMP DEFAULT NOW()
`;

const alterTableTweet = async () => {
    await passport.query(query);
};

export default alterTableTweet;
