import { tripExpensesProps } from "@/types/types";
import mongoose, { models, Schema } from "mongoose";

const tripExpenses = new Schema<tripExpensesProps>(
  {
    expenseTitle: {
      type: String,
    },
    amount: {
      type: String,
    },
    dateofExpense:{
      type:String,
    },
    expenseDesc:{
      type:String,
    },
    paidBy: {
      type: String,
    },
    paidUserId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const TRIPEXPENSE =
  models?.TRIPEXPENSE || mongoose.model("TRIPEXPENSE", tripExpenses);
export default TRIPEXPENSE;
