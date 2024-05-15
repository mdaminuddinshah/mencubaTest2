export const getHealth = (req,res) => {
    try{
        res.send("welcome");
        res.status(200);
        console.log("CONNECTED")
    } catch(err){
        res.status(404);
        res.send("FAILED")
        console.log("FAILED CONNECT")
    }
}

export const pageNotFound = (req,res) => {
    try{
        res.send("Page not found");
        res.status(404);
        console.log("page not found")
    } catch(err){
        res.status(500);
        console.log("something wrong, error")
    }
}