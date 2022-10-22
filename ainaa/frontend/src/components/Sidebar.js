import React, { useState,useEffect } from 'react'
import {CgProfile} from "react-icons/cg";
import {GiMirrorMirror} from "react-icons/gi"
import {MdOutlineAddTask} from "react-icons/md"
import {BsFillJournalBookmarkFill} from "react-icons/bs"
import {IoIosNotifications} from "react-icons/io"
import axios from 'axios';


export default function Sidebar() {
    const [notifData,setnotifData]=useState([]);
    const userId=localStorage.getItem('loggeduser');

    useEffect(()=>{
      try{
        axios.get('/api/notifications/'+userId+'/')
        .then((response)=>{
          console.log(response);
          setnotifData(response.data);
        });
      }catch(error){
        console.log(error);
      }
    },[]);

  return (
    <>
    {/* <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'> */}
          <div className='card' style={{backgroundColor: "#16202a"}}>
            <h5 className='card-header'><a href='/dashboard' style={{color:'white', textDecoration:'none'}}>Dashboard</a></h5>
            <div className='list-group list-group-flush'>
              <a href='/profile' className='list-group-item list gropu-item-action'><CgProfile/> Profile</a>
              <a href='/ainaa' className='list-group-item list gropu-item-action'><GiMirrorMirror/> Ainaa</a>
              
              <a href='/addjournals' className='list-group-item list gropu-item-action'><BsFillJournalBookmarkFill/> Add Journal</a>
              <a href='/addgoals' className='list-group-item list gropu-item-action'><MdOutlineAddTask/> Add Goals</a>
             
              <a href='/notification' className='list-group-item list gropu-item-action'><IoIosNotifications/> Notifications <span className ="float-end badge bg-danger mt-1">{notifData.length}</span></a>
             
            </div>
          </div>
        {/* </aside>
      </div>
    </div> */}
    </>
  )
}
