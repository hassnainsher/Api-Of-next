import Link from "next/link";
import { ReactNode } from "react";

interface UserResponse {
  age: ReactNode;
  city: ReactNode;
  name: ReactNode;
  id : ReactNode;
}

export async function User(): Promise<UserResponse[]>{
    const data = await fetch("http://localhost:3000/api/user");


    if(!data.ok){
      throw new Error("Network response is not ok");
    }





    // data = await data.json();
    // return data;
    const result: UserResponse[] = await data.json();
    return result;
}


export default async function page() {
    const user = await User()
    
    console.log('====================================');
    console.log(user);
    console.log('====================================');

    
  return (
    <div>
      <center>
      <h1>welcome to result land</h1><br />
        {
          user.map((item: UserResponse, index:number)=>(
            <main key={index}>
              <Link href={`/user/${item.id}`}>{item.name}</Link>
            </main>
          ))
        } 

</center>

    </div>
  )
}













