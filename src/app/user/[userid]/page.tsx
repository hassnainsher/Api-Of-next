import React, { ReactNode } from 'react';

interface UserResponse {
  name: ReactNode;
  city: ReactNode;
  age: ReactNode;
  id: ReactNode;
  userid: string;
}
interface ApiResponse {
  result: UserResponse;
}

export async function UserData(id: string): Promise<ApiResponse> {
  const data = await fetch(`http://localhost:3000/api/user/${id}`);
  const result: ApiResponse = await data.json();
  return result;
}

export default async function Page({ params }: { params: { userid: string } }) {
  const userdata = await UserData(params.userid);

  return (
    <div>
      <center>
        <h1>{userdata.result.name}</h1>
        <h1>{userdata.result.age}</h1>
        <h1>{userdata.result.city}</h1>
        <h1>{userdata.result.id}</h1>
      </center>
    </div>
  );
}
