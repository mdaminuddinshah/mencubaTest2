import express from "express";
import { getHealth } from "./controller/getHealth.js";
import { pageNotFound } from "./controller/getHealth.js";
import { DatabaseConnection } from "./database/Database.js";
import { uploadFile } from "./controller/tweet controller/create.js";
import middlewareHandle from "./middleware/multer.js";
import queryData from "./controller/tweet controller/read.js";

const app = express();
const PORT = 1005;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// query file in localhost
app.use("/readFile", express.static("assets"));

DatabaseConnection();

// check health
app.get("/home", getHealth);

// upload file
app.post("/upload",middlewareHandle.single("photo"), uploadFile);

// query data
app.get("/read", queryData);


app.use(pageNotFound);

app.listen(PORT);