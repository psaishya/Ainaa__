import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
export default function Task() {
    
    const[User,setUser] = useState("");
    const[Title,setTitle] = useState("");
    const[Description,setDescription] = useState("");
    const[Complete,setComplete] = useState("");
    const[Create,setCreate] = useState("");
    let {idn}=useParams();
    function getTaskDetails(){
      fetch('/api/Usar'+'?id='+idn).then((Response)=>Response.json()).then((data)=>{
        setUser(data.user),
        setTitle(data.title),
        setDescription(data.description),
        setComplete(data.complete),
        setCreate(data.create)
      });
   
    }
  return (
    <div>
      <div>
      <h1>this is task {idn}</h1>
      <p>inside main hello now please work</p>
      <p>User:{User}</p>
        <p>Title:{Title}</p>
        <p>Description:{Description}</p>
        <p>Complete:{Complete.toString()}</p>
        <p>Create:{Create}</p>
        {getTaskDetails()}
    </div>
    </div>
  )
}
