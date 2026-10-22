import { Currentuser } from "@/lib/auth/CurrentUser";
import MEMBER from "@/models/member.model/member.model";
import TRIP from "@/models/trips.model/trips.model";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const owner = await Currentuser();
    const ownerId = owner._id;
    const { tripName, tripDesc, destination, startDate, endDate, currency } =
      await req.json();

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

    const trip = await TRIP.create({
      tripName,
      tripDesc,
      tripLocation: destination,
      tripStartDate: startDate,
      tripEndDate: endDate ? endDate : "",
      tripOwnerId: ownerId,
    });

    const member = await MEMBER.create({
      name: owner.name,
      email: owner.email,
      tripId: trip._id,
      tripName: trip.tripName,
      addedById: ownerId,
    });


    await trip.tripMembers.push(member._id);

    trip.save();

    return NextResponse.json(
      { msg: "Trip is successFully created" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ msg: "Internal server Error" }, { status: 500 });
  }
};
