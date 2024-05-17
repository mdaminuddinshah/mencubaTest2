export const uploadFile = (req,res) => {
    try{

        const file = req.file;

        res.status(200).json({
            message: "file uploaded",
            file: file
        })

        console.log(file);
        
    } catch(err){
        res.status(404).json({
            message: "cannot upload file"
        })
    }
}