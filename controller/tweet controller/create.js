import { passport } from "../../database/Database.js";

export const uploadFile = async (req,res) => {
    try{
        const file = req.file;

        const query = `
            INSERT INTO tweet(
                fieldname, 
                originalname,
                encoding,
                mimetype,
                destination,
                filename,
                path,
                size
            )
            VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *
        `;

        const data = await passport.query(query, [
            file.fieldname,
            file.originalname,
            file.encoding,
            file.mimetype,
            file.destination,
            file.filename,
            file.path,
            file.size
        ]);

        res.status(200).json({
            message: "file uploaded",
            data: data.rows[0]
        })

        console.log(file);
        
    } catch(err){
        res.status(404).json({
            message: "cannot upload file"
        })
    }
}