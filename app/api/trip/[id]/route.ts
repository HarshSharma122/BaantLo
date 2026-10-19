import dbConnect from "@/lib/Db";
import MEMBER from "@/models/member.model/member.model";
import TRIP from "@/models/trips.model/trips.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    await dbConnect();
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ msg: "Please send the id" }, { status: 401 });
    }

    const details = await TRIP.findOne({
      _id: id,
    }).populate({
      path:"tripMembers",
      model:MEMBER
    });;

    if (!details) {
      return NextResponse.json(
        { msg: "No trip found from this id" },
        { status: 401 },
      );
    }

    return NextResponse.json({ msg: details}, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ msg: error }, { status: 500 });
  }
};
