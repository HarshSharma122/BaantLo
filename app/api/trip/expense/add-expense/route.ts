import { Currentuser } from "@/lib/auth/CurrentUser";
import TRIPEXPENSE from "@/models/expense.model/Expense.model";
import TRIP from "@/models/trips.model/trips.model";
import { NextRequest, NextResponse } from "next/server";



export const POST = async (req: NextRequest) => {
  try {
    const owner = await Currentuser();
    const ownerId = owner._id;
    const { expenseTitle, amount, dateofExpense, expenseDesc, tripId } =
      await req.json();

    if (!expenseTitle || !amount || !dateofExpense || !expenseDesc) {
      return NextResponse.json(
        { msg: "Input field is required" },
        { status: 401 },
      );
    }

    const arr = {
      expenseTitle,
      amount,
      expenseDesc,
      paidBy: owner.name,
      dateofExpense,
      paidUserId: ownerId,
    };

    await TRIPEXPENSE.create(arr);

    const trip = await TRIP.findOne({ _id: tripId });

    trip.tripExpense.push(arr);

    trip.save();





    console.log(trip);
    
    return NextResponse.json(
      { msg: "Expense is successFully added" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Internal server Error" }, { status: 500 });
  }
};
