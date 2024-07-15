import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const DB = mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>{
    console.log("DataBase Connection")
}).catch((err)=>{
    console.error("Error to conecction DB")
})

export default DB;