import dbConnect from "@/lib/Db";
import member from "@/models/members/members.model";
import trip from "@/models/trips/trips.model";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const sending = () => {
  return Math.random().toString(36).substring(2, 9);
};

// const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { name, email, phoneNo, tripId, tripName } = await req.json();
    if (!name || !email || !phoneNo || !tripName) {
      throw new Error("Please fill all the details");
    }

    const sendingId = sending();

    const tripData = await trip.findById({ _id: tripId });
    if (!tripData) {
      return NextResponse.json({ msg: "No Trip found" }, { status: 404 });
    }
    const res = await member.create({
      name,
      email,
      phoneNo,
      sendingId,
      tripName,
      tripId,
      memberId:
        email === user?.emailAddresses[0].emailAddress ? user?.id : null,
      isAccepted: email === user?.emailAddresses[0].emailAddress ? true : false,
    });



    tripData.tripMembers.push(res._id);




    await tripData.save();
    return NextResponse.json(
      { msg: "Request send", id: sendingId },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Some error occured" }, { status: 500 });
  }
};
