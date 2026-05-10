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
    const { tripName, tripLocation, startDate } = await req.json();
    if (!tripName || !tripLocation || !startDate) {
      throw new Error("Please fill all the details");
    }



    await trip.create({
      tripName: tripName,
      tripLocation,
      tripStartDate: startDate,
      tripOwnerId: userId,
    });




    
    return NextResponse.json(
      { msg: "Trip Created SuccessFully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Some error occured" }, { status: 500 });
  }
};
export const GET = async () => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { msg: "You are not authenticated!" },
        { status: 400 }
      );
    }

    const user = await currentUser();
    await dbConnect();

    const findmember = await member.findOne({ memberId: userId });

    const response = await trip
      .find({
        $or: [
          { tripOwnerId: user?.id }, // owner trips
          { tripMembers: findmember?._id } // member trips (safe if null)
        ]
      })
      .populate("tripMembers");



    return NextResponse.json({ msg: response }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
};
