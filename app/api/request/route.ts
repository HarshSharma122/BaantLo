import dbConnect from "@/lib/Db";
import member from "@/models/members/members.model";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { msg: "You are not authenticated" },
        { status: 404 },
      );
    }

    const user = await currentUser();

    const response = await member.find({
      email: user?.emailAddresses[0].emailAddress,
      isAccepted: false,
    });

    
    if (!response) {
      return NextResponse.json(
        { msg: "No trip data is found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ msg: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
};
