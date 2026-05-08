import mongoose, { Mongoose } from "mongoose";



export interface tripExpensesProps{
  _id:mongoose.Types.ObjectId;
  expenseTitle:string;
  amount:string;
  paidBy:string;
  paiduserId:string;

}



export interface TripsProps {
  _id: mongoose.Types.ObjectId;
  tripName: string;
  tripStartDate?: string;
  isTripEnded?: string;
  tripMembers: memberProps[];
  tripLocation: string;
  tripMoney?: string;
  tripOwnerId: string;
  tripExpenses?:tripExpensesProps[];
  tripHistory?: string[];
  tripEndDate?: string;
  createdAt: Date;

  updatedAt: Date;
};







export interface userProps {
  _id: mongoose.Types.ObjectId;
  name: string;
  userId: string;
  email: string;

  totalTrip: string;
  totalSpend: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface memberProps {
  _id: mongoose.Types.ObjectId;
  name: string;
  phoneNo: string;
  email: string;
  isAccepted: boolean;
  tripId:string
  tripName:string;
  sendingId: string;
  memberId: string;
  createdAt: Date;
  updatedAt: Date;
}
