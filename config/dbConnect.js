const {default: mongoose} = require("mongoose")
mongoose.set('strictQuery', false);
const dbConnect = () =>{
    try{
        const conn=mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected successfully");
    }catch(error){
        console.log("database connection error");
    }
}
module.exports=dbConnect;