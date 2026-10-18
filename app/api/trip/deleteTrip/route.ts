import TRIP from "@/models/trips.model/trips.model";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest) => {
  try {
    const { tripId } = await req.json();

    if (!tripId) {
      return NextResponse.json(
        { msg: "Input field is required" },
        { status: 401 },
      );
    }



   await TRIP.findOneAndDelete({_id:tripId});
    

    return NextResponse.json(
      { msg: "Trip is successFully deleted" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Internal server Error" }, { status: 500 });
  }
};
