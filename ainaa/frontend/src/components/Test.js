import React from 'react'
import { useParams } from 'react-router-dom'


export default function Test() {
    let {username}=useParams();

  return (
    <div>
      <div>
      <h1>this is of user {username}</h1>
      <p>inside test2 hello
        is it working?
      </p>
    </div>
    </div>
  )
}
