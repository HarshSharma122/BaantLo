import { Currentuser } from "@/lib/auth/CurrentUser";
import TRIP from "@/models/trips.model/trips.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const user = await Currentuser();
    const userId = user._id;
    const response = await TRIP.find({tripOwnerId:userId});
    if(!response){
      return NextResponse.json({ msg:"No Trip found"}, { status: 200 });
    }
    return NextResponse.json({ msg: response}, { status: 200 });

  } catch (error) {
    return NextResponse.json({ msg: "Internal server Error" }, { status: 500 });
  }
};
