import mongoose, { Mongoose } from "mongoose";

export interface userProps {
  _id: mongoose.Types.ObjectId;
  name: string;
  password: string;
  email: string;
  currency: string;
  totalTrip: string;
  totalGroup: string;
  totalSpend: string;
  plan: string;
  isNotification: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface tripExpensesProps {
  expenseTitle: string;
  amount: string;
  paidBy: string;
  paidUserId: string;
}

export interface tripProps {
  _id: mongoose.Types.ObjectId;
  tripName: string;
  tripDesc: string;
  tripStartDate: string;
  tripEndDate: string;
  isTripEnded: boolean;
  tripOwnerId: string;
  tripLocation: string;
  tripMoney: string;
  tripCurrency: string;
  tripMembers: membersProps[];
  tripExpense: [tripExpensesProps];
  tripHistory: [string];
  createdAt: Date;
  updatedAt: Date;
}

export interface membersProps {
  _id:mongoose.Types.ObjectId
  name: string;
  email: string;
  phoneNo: string;
  tripId: string;
  tripName: string;
  isAccepted: boolean;
  sendingId: string;
  addedById: string;
  createdAt:Date;
  updatedAt:Date
}
