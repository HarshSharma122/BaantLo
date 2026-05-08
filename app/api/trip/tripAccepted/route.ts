import dbConnect from "@/lib/Db";
import member from "@/models/members/members.model";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

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
    const { memberId } = await req.json();
    if (!memberId) {
      throw new Error("Please fill all the details");
    }

    await member.findByIdAndUpdate(
      { _id: memberId },
      {
        isAccepted: true,
        memberId: user?.id,
      },
    );
    return NextResponse.json({ msg: "Request accepted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Some error occured" }, { status: 500 });
  }
};
