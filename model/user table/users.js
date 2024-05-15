import { passport } from "../../database/Database.js";

const query = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        
        created_at TIMESTAMP DEFAULT NOW()
    )
`