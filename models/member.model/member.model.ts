import { membersProps } from "@/types/types";
import mongoose, { models, Schema } from "mongoose";

const memberSchema = new Schema<membersProps>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
  },
  tripId:{
    type:String,
  },
  tripName:{
    type:String,
  },
  isAccepted: {
    type: Boolean,
    required: true,
    default: false,
  },
 
  addedById: {
    type: String,
  },
},{timestamps:true});

const MEMBER = models?.MEMBER || mongoose.model("MEMBER", memberSchema);
export default MEMBER;
