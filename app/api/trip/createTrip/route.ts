import { Currentuser } from "@/lib/auth/CurrentUser";
import TRIP from "@/models/trips.model/trips.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {

    const owner = await Currentuser();
    const ownerId = owner._id;
    const {
      tripName,
      tripDesc,
      destination,
      startDate,
      endDate,
      currency,
    } = await req.json();

    if (
      !tripName ||
      !tripDesc ||
      !destination ||
      !startDate ||
      !currency ||
      !ownerId
    ) {
      return NextResponse.json(
        { msg: "Input field is required" },
        { status: 401 },
      );
    }

    await TRIP.create({
      tripName,
      tripDesc,
      tripLocation: destination,
      tripStartDate: startDate,
      tripEndDate: endDate ? endDate : "",
      tripOwnerId: ownerId,
    });


    
    return NextResponse.json({ msg: "Trip is successFully created"}, { status: 200 });

  } catch (error) {
    return NextResponse.json({ msg: "Internal server Error" }, { status: 500 });
  }
};
