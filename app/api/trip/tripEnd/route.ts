// /api/trip/tripEnd
import dbConnect from "@/lib/Db";
import TRIP from "@/models/trips.model/trips.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req:NextRequest)=>{
    try {
    await dbConnect();
    const {tripId} =   await req.json();


    if(!tripId){
        return NextResponse.json({msg:"Trip Id is required"}, {status:401});
    }

    console.log(tripId);

    
    


    await TRIP.findOneAndUpdate({_id:tripId}, {
        isTripEnded:true,
        tripEndDate:new Date(),
    })


    return NextResponse.json({msg:"Trip Ended successFully"}, {status:200});

    } catch (error) {
        return NextResponse.json({msg:"Internal server error"}, {status:500});
    }

}