"use client";
import React, { useState } from 'react';

export default function Page() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [mail,setMail]=useState('')
    const addUser=async()=>{
        // console.log('====================================');
        // console.log(name,age,mail);
        // console.log('====================================');
        let response = await fetch("http://localhost:3000/api/student",{
            method:"Post",
            body:JSON.stringify({name,age,mail})
        });
        response = await response.json();
        console.log(response);
        
    }
  return (
    <main>
        <h1>add new user</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='my-2 mx-4 text-black' placeholder='enter your name' />
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='enter your age' className='mx-4 my-2 text-black'/>
        <input type="text" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder='enter your mail address' className='mx-4 my-2 text-black' />
        <button className='bg-orange-600 w-52 rounded hover:bg-red-700 my-2 mx-3' onClick={addUser}>submit</button>
    </main>
  )
}
