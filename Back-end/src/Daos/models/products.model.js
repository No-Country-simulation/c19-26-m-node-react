import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    img: {
        type : String,
        required : true
    },
    Price : {
        type : Number,
        required : true
    },
    Description : {
        type : String,
        required : false
    },
    Status : {
        type : String,
        required : true
    },
    Owner : {
        type : String,
        required : true
    },
    Cantidad : {
        type : Number,
        required : true
    }
});

const Product = new mongoose.model("Products",productSchema)
export default Product;