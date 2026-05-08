import { tripExpensesProps, TripsProps } from "@/types/types";
import mongoose, { models, Schema } from "mongoose";


const tripExpenses = new Schema<tripExpensesProps>(
  {
    expenseTitle:{
      type:String,
    },
    amount:{
      type:String,
    },
    paidBy:{
      type:String
    },
    paiduserId:{
      type:String
    }
  }

)
const tripSchema = new Schema<TripsProps>(
  {
    tripName: {
      type: String,
    },
    tripStartDate: {
      type: String,
    },
    isTripEnded: {
      type: Boolean,
    },
    tripLocation: {
      type: String,
    },
    tripOwnerId: {
      type: String,
    },
    tripEndDate: {
      type: String,
    },
    tripMoney: {
      type: String,
    },
    tripExpenses: [tripExpenses],
    tripHistory: [
      {
        type: String,
      },
    ],
    tripMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "member",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const trip = models?.trip || mongoose.model("trip", tripSchema);
export default trip;
