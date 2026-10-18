import { Currentuser } from "@/lib/auth/CurrentUser";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await Currentuser();

    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        plan:user.plan,
        createdAt:user.createdAt
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        msg: "server Error",
      },
      {
        status: 500,
      },
    );
  }
}
