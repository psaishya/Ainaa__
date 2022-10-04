import React from 'react'
import {CgProfile} from "react-icons/cg";
import {GiMirrorMirror} from "react-icons/gi"
import {MdOutlineAddTask} from "react-icons/md"
import {BsFillJournalBookmarkFill} from "react-icons/bs"
import {IoIosNotifications} from "react-icons/io"


export default function Sidebar() {
  return (
    <>
    {/* <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'> */}
          <div className='card'>
            <h5 className='card-header'>Dashboard</h5>
            <div className='list-group list-group-flush'>
              <a href='/profile' className='list-group-item list gropu-item-action'><CgProfile/> Profile</a>
              <a href='#' className='list-group-item list gropu-item-action'><GiMirrorMirror/> Aaina</a>
              <a href='#' className='list-group-item list gropu-item-action'><MdOutlineAddTask/> Goals</a>
              <a href='#' className='list-group-item list gropu-item-action'><BsFillJournalBookmarkFill/> Journal</a>
              <a href='#' className='list-group-item list gropu-item-action'><IoIosNotifications/> Notifications <span className ="float-end badge bg-danger mt-1">123</span></a>
            </div>
          </div>
        {/* </aside>
      </div>
    </div> */}
    </>
  )
}
