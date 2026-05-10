import { userProps } from "@/types/types";
import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema<userProps>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    },
    totalSpend:{
        type:String,
        default:"0"
    },
    totalTrip:{
        type:String,
        default:"0"
    },
    totalGroup:{
        type:String,
    },
    image:{
        type:String,
    }
},{timestamps:true});


const user  =  models.user || mongoose.model("user", userSchema);
export default user;

