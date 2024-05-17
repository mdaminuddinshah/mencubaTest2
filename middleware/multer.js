import multer from "multer";
import path from "path";
import crypto from "crypto";

// must be storage, cannot other name
// this middleware multer.diskStorage is handle filename & destination for the photo
// using path and crypto to access extname and randomUUID
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "assets/")
    }, 
    filename: function(req, file, cb){
        const uuid = crypto.randomUUID();
        cb(null, uuid + path.extname(file.originalname))
    }
});

const middlewareHandle = multer({storage: storage});

export default middlewareHandle;