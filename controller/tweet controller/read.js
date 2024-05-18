import { passport } from "../../database/Database.js";
const query = `
    SELECT * FROM tweet
`;

const queryData = async (req,res) => {
    try{
        const file = await passport.query(query);
        const data = file.rows;

        res.status(200).json({
            message: "success query data",
            data: data
        })
    } catch(err){
        res.status(404).json({
            message: "failed query data"
        })
    }
};

export default queryData;