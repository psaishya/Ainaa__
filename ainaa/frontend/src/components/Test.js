import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';


export default function Test() {
    const[userData,setuserData]=useState(null);
    useEffect(()=>{
      axios.get('/api/user').then((response)=>{
        console.log(response.data);
      });
    },[ ])

  return (
    <div>
      <div>
      <h1>this is of user </h1>
      <p>inside test2 hello
        is it working?
      </p>
    </div>
    </div>
  )
}
