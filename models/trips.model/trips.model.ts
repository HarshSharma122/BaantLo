import { tripExpensesProps, tripProps } from "@/types/types";
import mongoose, { models, Schema } from "mongoose";

const tripExpenses = new Schema<tripExpensesProps>({
  expenseTitle: {
    type: String,
  },
  amount: {
    type: String,
  },
  paidBy: {
    type: String,
  },
  paidUserId: {
    type: String,
  },
});
const tripSchema = new Schema<tripProps>(
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
    tripExpense: [tripExpenses],
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

const TRIP = models?.TRIP || mongoose.model("TRIP", tripSchema);
export default TRIP;
