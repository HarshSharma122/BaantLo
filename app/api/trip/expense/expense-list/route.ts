import { Currentuser } from "@/lib/auth/CurrentUser";
import TRIPEXPENSE from "@/models/expense.model/Expense.model";
import { NextResponse } from "next/server";


// /api/trip/expense/expense-list


export const GET = async () => {
  try {
    const user = await Currentuser();

    if (!user) {
      return NextResponse.json(
        { msg: "You are not authenticated" },
        { status: 411 },
      );
    }

    const userId = user._id;
    const members = await TRIPEXPENSE.find({ paidUserId: userId });

    if (!members) {
      return NextResponse.json({ msg: "No Expense found" }, { status: 411 });
    }
    
    return NextResponse.json({ msg: members }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { msg: "Internal server Error", error },
      { status: 500 },
    );
  }
};
