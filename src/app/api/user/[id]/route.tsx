// import { user } from "@/app/util/db";
// import { NextResponse } from "next/server";



// export async function GET(request: Request, content: { params: { id: string } }): Promise<Response> {
//     // console.log('====================================');
//     // console.log(content.params.id); 
//     // console.log('====================================');

//     const userId = parseInt(content.params.id); 
//     const data = user.filter((item) => item.result.id == userId); 
//     // try
//     const test = user;
//     console.log('====================================');
//     console.log(test[0].result.id);
//     console.log('====================================');
    
//     return NextResponse.json(
//         data.length === 0 ? { result: "not found your data", success: false } : { result: data[0].result, success: true },  // Return `result` object
//         { status: 200 }
//     );
// }







import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request:Request,content : {params:{id:string}}) {
    const userData = user.filter((item)=>item.id == parseInt(content.params.id));
    if(userData.length ==0 ){
        return NextResponse.json(
            {result: "not found your data",}
        )
    }else{
        return NextResponse.json(
            {result: userData[0]}
        )
    }
}