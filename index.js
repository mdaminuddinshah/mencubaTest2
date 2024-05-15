import express from "express";
import { getHealth } from "./controller/getHealth.js";
import { pageNotFound } from "./controller/getHealth.js";
import { DatabaseConnection } from "./database/Database.js";

const app = express();
const PORT = 1005;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
DatabaseConnection();

app.get("/home", getHealth);

app.use(pageNotFound);

app.listen(PORT);