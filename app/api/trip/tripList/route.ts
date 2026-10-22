import { Currentuser } from "@/lib/auth/CurrentUser";
import MEMBER from "@/models/member.model/member.model";
import TRIP from "@/models/trips.model/trips.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const user = await Currentuser();

    const members = await MEMBER.find({
      email: user.email,
    }).select("_id");






    /*
    
    here simple approach follow ====== i know that i have members like when i add members every member allocated different _id and how i identfy id dont know but one thing is same 
    is email 
    means ------- if x add into tripA then x add into tripB so email is same onto both trip likewise member section 


    we just found all members whoese email is x and return only _id




    if we just found into TRIP collection just search into that i have some id please search into tripMembers if found some data then return it but one 
    thing is i have multiple id for search how can you search so we have $in method that method use to search from multiple elemens is like .includes like method 





    
    
    */
    const response = await TRIP.find({
      tripMembers:{
        $in:members.map(member=>member._id)
      }
    }).sort({createdAt:-1});






    if (!response) {
      return NextResponse.json({ msg: "No Trip found" }, { status: 200 });
    }
    return NextResponse.json({ msg: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { msg: "Internal server Error", error },
      { status: 500 },
    );
  }
};
