import mongoose from "mongoose";

export interface userProps{
    _id:mongoose.Types.ObjectId;
    name:string;
    userId:string;
    email:string;
    currency:string;
    totalTrip:string;
    totalGroup:string;
    totalSpend:string;
    plan:"free" | "Pro";
    isNotification:boolean;
    createdAt:Date;
    updatedAt:Date;
}

export interface tripExpensesProps{
    expenseTitle:string;
    amount:string;
    paidBy:string;
    paidUserId:string;
}

export interface tripProps{
    tripName:string;
    tripDesc:string;
    tripStartDate:string;
    tripEndDate:string;
    isTripEnded:boolean;
    tripOwnerId:string;
    tripLocation:string;
    tripMoney:string;
    tripMembers:[],
    tripExpense:[tripExpensesProps],
    tripHistory:[string],
}


export interface membersProps{
    name:string;
    email:string;
    phoneNo:string;
    tripId:string;
    tripName:string;
    isAccepted:boolean;
    sendingId:string;
    memberId:string;
}
