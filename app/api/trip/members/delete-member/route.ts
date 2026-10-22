import MEMBER from "@/models/member.model/member.model";
import TRIP from "@/models/trips.model/trips.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  try {
    const { tripId, memberId } = await req.json();

    if (!tripId || !memberId) {
      return NextResponse.json(
        { msg: "Input field is required" },
        { status: 401 },
      );
    }

    await TRIP.findByIdAndUpdate(
      tripId ,
      {
        $pull: {
          tripMembers: new mongoose.Types.ObjectId(memberId),
        },
      },
      {
        new: true,
      },
    );


    await MEMBER.findOneAndDelete({_id:memberId});
    return NextResponse.json(
      { msg: "member is successFully deleted" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Internal server Error" }, { status: 500 });
  }
};
