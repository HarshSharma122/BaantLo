import MEMBER from "@/models/member.model/member.model";
import TRIP from "@/models/trips.model/trips.model";
import { Currentuser } from "@/lib/auth/CurrentUser";
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

    const Trip = await TRIP.findOne({ _id: tripId }).populate({
      path: "tripMembers",
      model: MEMBER,
    });

    const existEmail = Trip.tripMembers.find((f: any) => f.email == email);
    if (existEmail) {
      return NextResponse.json(
        { msg: "Email is already exist please try different email" },
        { status: 401 },
      );
    } else {
      const member = await MEMBER.create({
        name,
        email,
        phoneNo,
        tripId,
        tripName,
        addedById: ownerId,
      });

      await Trip.tripMembers.push(member._id);

      Trip.save();
      return NextResponse.json(
        { msg: "Member added successFully" },
        { status: 200 },
      );
    }
  } catch (error: any) {

    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
};
