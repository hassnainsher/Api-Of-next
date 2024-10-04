
import { NextResponse } from "next/server";



export async function POST(request:Request){
    const payload = await request.json()
    console.log('====================================');
    console.log(payload);
    console.log('====================================');
    if(!payload.name || !payload.age || !payload.mail){
        return NextResponse.json({"details":"enter your compilete detailes",success:false})
    }
    return NextResponse.json({result:"new user has been created",success:true},{status:200})
}