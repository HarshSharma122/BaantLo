import { cookies } from "next/headers";
import Jwt from 'jsonwebtoken'
import USER from "@/models/user.model/user.model";
import dbConnect from "../Db";

export const Currentuser = async()=>{
    await dbConnect();
    const SECRET_KEY = process.env.SECRET_KEY;
    // how to get cookie value---which 
    const cookie = await cookies();
    const cookieValue = cookie.get("TokenId")?.value;
    if(!cookieValue){
        return null;
    }


    const decodeId:any = Jwt.verify(cookieValue, SECRET_KEY!);

    const userId = decodeId.userId;

    if(!userId){
        return null;
    }

    const user = await USER.findOne({
        _id:userId
    });


    if(!user){
        return null;
    }


    return user;


}