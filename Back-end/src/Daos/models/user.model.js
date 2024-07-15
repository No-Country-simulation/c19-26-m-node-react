import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    First_Name : {
        type : String,
        required : false,
    },
    Last_Name : {
        type : String,
        required : false
    },
    Age :{
        type : Number,
        required : true
    },
    Correo_Electronico : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    Role : {
        type :String,
        enum : ["User","Restaurant","Delivery","admin"],
        default : "User"
    },
    Last_connection : {
        type : Date,
        default : null
    }
});

const User = new mongoose.model("Users",userSchema)
export default User;