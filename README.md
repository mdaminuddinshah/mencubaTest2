<!--  cara upload pictures -->
1. create uploadFile in controller
2. create route for uploadFile in index.js
3. create folder middleware, 
    - create middleware file, e.g. multer.js
        - import multer from 'multer'
        - const uploadFile = multer.diskStorage({
            destination: function(req, file, cb){
                cb(null, "assets/")
            },
            filename: function(req,file,cb){
                const uniqueName = crypto.randomUUID();
                cb(null, uniqeurName + path.extname(file.originalname))
            }
        })
        - const middlewareUpload = multer({uploadFile: uploadFile})
4. go to route, add middleware 
    - import { uploadMulter } from "/middleware/multer.js";
    - add this in middle route, app.post("/upload", uploadMulter.single("photo"), uploadFile);
5. go to controller uploadFile.js, 
    - add req.file
    - const file = req.file
    - file: file
    <!-- req.file comes from upload.multer.single("") -->
6. 