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
    const {tripEndedDate, tripId} = await req.json();
    if (!tripEndedDate) {
      throw new Error("Please fill all the details");
    }


    const response = await trip.findById({_id:tripId});
    if(!response)
    {
      return NextResponse.json({msg:"No Trip found"}, {status:404});
    }
    response.tripEndDate = tripEndedDate;
    response.isTripEnded = true;
    await response.save();   
    
    return NextResponse.json(
      { msg: "Trip update is saved successFully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Some error occured" }, { status: 500 });
  }
};
