import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
export default function Main() {
    
    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[gender,setGender] = useState("");
    const[email,setEmail] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    let {usern}=useParams();
    function getUserDetails(){
      fetch('/api/get-user'+'?userName='+usern).then((Response)=>Response.json()).then((data)=>{
        setFirstname(data.firstName),
        setLastname(data.lastName),
        setGender(data.gender),
        setEmail(data.email),
        setUsername(data.userName),
        setPassword(data.password)
      });
    }
  return (
    <div>
      <div>
      <h1>this is of user {usern}</h1>
      <p>inside main hello now please work</p>
      <p>FirstName:{firstname}</p>
        <p>LastName:{lastname}</p>
        <p>Gender:{gender}</p>
        <p>Email:{email}</p>
        <p>UserName:{username}</p>
        <p>Password:{password}</p>
        {getUserDetails()}
    </div>
    </div>
  )
}
