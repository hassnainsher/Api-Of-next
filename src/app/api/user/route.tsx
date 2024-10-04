import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET() {
    const userData = user;
    // const mydata =user.filter((item)=>item.result == )
    return NextResponse.json(userData,{status:200})
}

export async function POST(request:Request){
    // console.log('====================================');
    // console.log(request);
    // console.log('====================================');
    const payload = await request.json();
    console.log('====================================');
    console.log(payload);
    console.log('====================================');
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({request:"please enter your complete detailes"})
    }
    return NextResponse.json({"name":"ali"},{status:200})
}