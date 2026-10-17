import { userProps } from "@/types/types";
import mongoose, { models, Schema } from "mongoose";


const userSchema = new Schema<userProps>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password:{
      type:String,
      required:true
    },
    totalSpend: {
      type: String,
      default: "0",
    },
    totalTrip: {
      type: String,
      default: "0",
    },
    totalGroup: {
      type: String,
    },
    plan: {
      type: String,
      default:"free"
    },
    isNotification: {
      type: Boolean,
      default:false
    },
   
  },
  {
    timestamps: true,
  },
);

const USER = models?.USER || mongoose.model("USER", userSchema);
export default USER;
