import dbConnect from "@/lib/Db";
import member from "@/models/members/members.model";
import trip from "@/models/trips/trips.model";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();

    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { msg: "User is not authenticated" },
        { status: 404 },
      );
    }
    const user = await currentUser();
    const { tripId, expenseTitle, amount, paidBy } = await req.json();
    if (!tripId || !expenseTitle || !amount) {
      throw new Error("Please fill all the details");
    }


    const response = await trip.findById({_id:tripId});
    if(!response)
    {
      return NextResponse.json({msg:"No Trip found"}, {status:404});
    }

    console.log(response);
    
    const expenses = {
       expenseTitle:expenseTitle,
       amount:amount,
       paidBy:paidBy,
       paiduserId:user?.id
    }
    response.tripExpenses.push(expenses);



    await response.save();
    return NextResponse.json(
      { msg: "Trip expense is saved successFully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Some error occured" }, { status: 500 });
  }
};
