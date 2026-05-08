import { memberProps } from "@/types/types";
import mongoose, { models, Schema } from "mongoose";

const memberSchema = new Schema<memberProps>({
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
    required: true,
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
  sendingId: {
    type: String,
    required: true,
  },
  memberId: {
    type: String,
  },
},{timestamps:true});

const member = models?.member || mongoose.model("member", memberSchema);
export default member;
