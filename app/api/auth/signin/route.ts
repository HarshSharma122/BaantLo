import dbConnect from "@/lib/Db";
import USER from "@/models/user.model/user.model";
import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const SECRET_KEY = process.env.SECRET_KEY as string;

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        status: 404,
        message: "Input field is required!",
      });
    }

    const existUser = await USER.findOne({
      email: email,
      password: password,
    });

    if (!existUser) {
      return NextResponse.json({
        status: 404,
        message:
          "Credentials is wrong ! please try different email or password",
      });
    }
    const token = Jwt.sign(
      {
        userId: existUser._id,
      },
      SECRET_KEY,
    );
    const cookie = await cookies();
    cookie.set("TokenId", token.toString(), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });
    return NextResponse.json({
      status: 200,
      message: "You successfuly logged In!",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
