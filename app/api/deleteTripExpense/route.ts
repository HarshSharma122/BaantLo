import dbConnect from "@/lib/Db";
import member from "@/models/members/members.model";
import trip from "@/models/trips/trips.model";
import { auth, currentUser } from "@clerk/nextjs/server";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest) => {
  try {
    await dbConnect();

    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { msg: "User is not authenticated" },
        { status: 404 },
      );
    }
    const { tripExpenseId } = await req.json();
    if (!tripExpenseId) {
      throw new Error("Please fill all the details");
    }

    await trip.updateOne(
  { "tripExpenses._id": tripExpenseId},
  {
    $pull: {
      tripExpenses: {
        _id: tripExpenseId,
      },
    },
  }
);

    return NextResponse.json({ msg: "Trip is deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Some error occured" }, { status: 500 });
  }
};
