import { Currentuser } from "@/lib/auth/CurrentUser";
import MEMBER from "@/models/member.model/member.model";
import TRIP from "@/models/trips.model/trips.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const owner = await Currentuser();
    const ownerId = owner._id;
    const { name, email, phoneNo, tripId, tripName } = await req.json();

    if (!tripName || !name || !email || !phoneNo || !tripId || !ownerId) {
      return NextResponse.json(
        { msg: "Input field is required" },
        { status: 401 },
      );
    }

    const findTrip = await TRIP.findById(tripId);
    console.log(findTrip);
    console.log("TRIP MEMBERS:", findTrip?.tripMembers);
    console.log("TYPE:", typeof findTrip?.tripMembers?.[0]);

    const Trip = await TRIP.findById(tripId).populate("tripMembers");

    console.log(Trip);

    return NextResponse.json(
      { msg: "Member added successFully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
};
