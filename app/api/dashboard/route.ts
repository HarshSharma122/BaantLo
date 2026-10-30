import { Currentuser } from "@/lib/auth/CurrentUser";
import TRIPEXPENSE from "@/models/expense.model/Expense.model";
import MEMBER from "@/models/member.model/member.model";
import TRIP from "@/models/trips.model/trips.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const user = await Currentuser();

    if (!user) {
      return NextResponse.json(
        { msg: "Not authenticated! please signIn first" },
        { status: 411 },
      );
    }

    const userId = user._id;

    const expense = await TRIPEXPENSE.find({ paidUserId: userId });

    const totalAmount = expense.reduce((total, expense) => {
      return total + Number(expense.amount);
    }, 0);




    const completedTrip = await TRIP.find({ tripOwnerId:userId , isTripEnded:true}).select("tripName tripStartDate tripLocation -_id");
    const activeTrip = await TRIP.find({ tripOwnerId:userId , isTripEnded:false}).sort({createdAt:-1}).select("tripName tripStartDate tripLocation -_id");









    return NextResponse.json(
      {totalAmount: totalAmount, completedTrip:completedTrip, activeTrip:activeTrip[0]},
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Internal server Error", error },
      { status: 500 },
    );
  }
};
