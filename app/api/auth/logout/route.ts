import dbConnect from "@/lib/Db";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const cookieStore = await cookies()
    cookieStore.delete("TokenId");
    return NextResponse.json({
      status: 200,
      message: "Logout successFully!",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
