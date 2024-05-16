<!--  cara upload pictures -->
1. create uploadFile in controller
2. create route for uploadFile in index.js
3. create folder middleware, 
    - create middleware file, e.g. multer.js
        - import multer from 'multer'
        - const uploadMulter = multer({dest: "assets/"})
4. go to route, add middleware 
    - import { uploadMulter } from "/middleware/multer.js";
    - add this in middle route, app.post("/upload", uploadMulter.single("photo"), uploadFile);
5. go to controller uploadFile.js, 
    - add req.file
    - const file = req.file
    - file: file