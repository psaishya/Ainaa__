import React from "react";
import Sidebar from "./Sidebar";
import { useState,useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {RiDeleteBin6Line} from "react-icons/ri";

export default function Notification(){
    const [notifData,setnotifData]=useState([]);
    const userId=localStorage.getItem('loggeduser');
    
   useEffect(()=>{
      try{
        axios.get('/api/notime/'+userId+'/')
        .then((response)=>{
          console.log(response);
          setnotifData(response.data);
          
        });
      }catch(error){
        console.log(error);
      }
    },[]);
    const handledelete=(id)=>{ 
     
              try{
                  axios.delete('/api/delnot/'+id+'/')
                  .then((respose)=>{
                    console.log(respose);
                      window.location.reload();
                  });
              }
              catch(error){
                console.log(error)

              }
    }
    return(
      
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                <div className='card' >
                        <h5 className="card-header">Notification list </h5>
                        <div className="card-body">
                        {Array.from(notifData).map((notification,index) =>
                        {return(   
                          
                        <div key={index} className="list-group">
                        <a >
                             
                              
                            
                            <div className="d-flex w-100 justify-content-between">
                            {notification.notif_type=='Daily Goal' && <h5 className='text-primary mb-1'>{notification.notif_type} </h5>}
                            {notification.notif_type=='Monthly Goal' && <h5 className='text-success mb-1'>{notification.notif_type} </h5>}
                            {notification.notif_type=='Yearly Goal' && <h5 className='text-danger mb-1'>{notification.notif_type}  </h5>}
                            <small>{moment(notification.notif_time).fromNow()}</small>
                            </div>
                            <p className="mb-1">{notification.notif_title} has been added to {notification.notif_type}.</p>
                            <button type="button" className="btn btn-danger float-right" onClick={()=>handledelete(notification.id)} ><RiDeleteBin6Line/></button>
                          
                        </a>
                        </div>
                
                    )})}                    
                        </div>
                    
                </div>      
                </section>
            </div>
        </div>
    )
}


                               