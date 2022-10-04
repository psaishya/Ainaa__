import React from 'react';
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditGoal() {
  const {taskid}=useParams();
  const loggeduser=localStorage.getItem('loggeduser');
  const[taskData,settaskData]=useState(
    {   
        'id':taskid,
        'user':loggeduser,
        'title':'',
        'description':'i changed ',
        'type':'',
        'complete':true,
        'create':'',
        'status':'',
    }
  ); 
  
  console.log(taskid);
  // useEffect(()=>{ 
  //   const userFormData=new FormData();
  //       userFormData.append("user",taskData.user)
  //       userFormData.append("title",taskData.title)
  //       userFormData.append("description",taskData.description)
  //       userFormData.append("type",taskData.type)
  //       userFormData.append("complete",taskData.complete)
  //       userFormData.append("create",taskData.create)

  //       // event.preventDefault();
  //       try{ 
         

  //           axios.put('/api/tasktime/'+taskid+'/',userFormData)
  //           .then((response)=>{
                
  //           console.log(response.data );
  //           // settaskData({
  //           // 'user':loggeduser,
  //           // 'title':'',
  //           // 'description':'',
  //           // 'type':'',
  //           // 'complete':taskData.complete,
  //           // 'create':taskData.create,
  //           // 'status':'success',
  //           // })
  //         })
  //         }
  //         catch(error){
  //           console.log(error);
  //           settaskData({'status':'error'})
  //         }
          
  // },[]);

const myfunc=(event)=>{  const userFormData=new FormData();
    userFormData.append("user",taskData.user)
    userFormData.append("title",taskData.title)
    userFormData.append("description",taskData.description)
    userFormData.append("type",taskData.type)
    userFormData.append("complete",taskData.complete)
    userFormData.append("create",taskData.create)

    event.preventDefault();
    try{ 
      

        axios.put('/api/tasktime/'+taskid+'/',userFormData)
        .then((response)=>{
            
        console.log(response.data );
        // settaskData({
        // 'user':loggeduser,
        // 'title':'',
        // 'description':'',
        // 'type':'',
        // 'complete':taskData.complete,
        // 'create':taskData.create,
        // 'status':'success',
        // })
      })
      }
      catch(error){
        console.log(error);
        settaskData({'status':'error'})
      }}
          
  return (
    <div>
      {taskData.status}
      <button onClick={myfunc}>click here</button>
    </div>
  )
}
