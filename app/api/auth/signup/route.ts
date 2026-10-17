import dbConnect from "@/lib/Db";
import USER from "@/models/user.model/user.model";
import { NextRequest, NextResponse } from "next/server";
import Jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
const SECRET_KEY = process.env.SECRET_KEY as string




export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({
        status: 404,
        message: "Input field is required!",
      });
    }

    const existUser = await USER.find({
      email: email,
    });

    if (existUser.length) {
      return NextResponse.json({
        status: 404,
        message: "This email is already exist please try different email",
      });
    } else {
      const response = await USER.create({
        name,
        email,
        password,
      });

      
      const token = Jwt.sign({
        userId:response._id
      }, SECRET_KEY);
      const cookie = await cookies();
      cookie.set("TokenId", token.toString(), {
        httpOnly:true,
        sameSite:"lax",
        path:"/",
        maxAge:7 * 24  * 60 * 60
      });
      return NextResponse.json({
        status: 200,
        message: "Account is SuccessFully created",
        data:response._id,
      });
    }
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
