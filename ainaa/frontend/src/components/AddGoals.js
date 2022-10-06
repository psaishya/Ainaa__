import React from 'react';
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';
import { BsWindowSidebar } from 'react-icons/bs';

export default function AddGoals(){
    const Swal = require('sweetalert2')
    const loggeduser=localStorage.getItem('loggeduser');
    const[taskData,settaskData]=useState(
        {
            'user':loggeduser,
            'title':'',
            'description':'',
            'type':'',
            'complete':false,
            'create':'',
            'status':'',
        }
    );
    const handleChange=(event)=>{
        settaskData({
          ...taskData,
          [event.target.name]:event.target.value
        }); 
      };
      const addTask=(event)=>{
        console.log(taskData);
        const userFormData=new FormData();
        userFormData.append("user",taskData.user)
        userFormData.append("title",taskData.title)
        userFormData.append("description",taskData.description)
        userFormData.append("type",taskData.type)
        userFormData.append("complete",taskData.complete)
        userFormData.append("create",taskData.create)

        
        event.preventDefault();
        try{
            axios.post('/api/task/',userFormData,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((response)=>{
                    
                console.log(response.data );
                settaskData({
                    'user':loggeduser,
                    'title':'',
                    'description':'',
                    'type':'',
                    'complete':taskData.complete,
                    'create':taskData.create,
                    'status':'success',
                });
                const notifData=new FormData();
                notifData.append('user',loggeduser);
                notifData.append('notif_type',taskData.type);
                notifData.append('notif_title',taskData.title)

                axios.post('/api/notifications/'+loggeduser+'/',notifData,{
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                .then((response)=>{console.log('Notification added');
            })
<<<<<<< HEAD
            window.location.reload
=======
            Swal.fire('Success','Task has been successfully added.');
>>>>>>> 54249054e478822c79777a54837ac88a3a15f1ce
          })
          }
          catch(error){
            console.log(error);
            settaskData({'status':'error'})
          }
          
          
        };
        
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className='card' >
                        <h5 className="card-header">Add your goals</h5>
                        <div className="card-body">
                            
                                <div className="mb-3">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                    <input defaultValue={taskData.title} type="text" className="form-control" onChange={handleChange} placeholder="Enter title" name='title' required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Description" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                    <textarea defaultValue={taskData.description} className="form-control" onChange={handleChange}  placeholder="Enter description" name = 'description'required/>
                                    </div>
                                </div>
                                {/* <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div> */}
                                <fieldset className="form-group">
                                    <div className="row">
                                    <legend className="col-form-label pt-0">Type</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                        <input className="form-check-input" onChange={handleChange} type="radio" name="type"  value="Daily Goal"/>
                                        <label className="form-check-label" >
                                            Daily Goal
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" onChange={handleChange} type="radio" name="type"  value="Monthly Goal"/>
                                        <label className="form-check-label" >
                                            Monthly Goal
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" onChange={handleChange} type="radio" name="type"  value="Yearly Goal"/>
                                        <label className="form-check-label" >
                                            Yearly Goal
                                        </label>
                                        </div>
                                    </div>
                                    </div>
                                </fieldset>
                         
                                {/* <div className="mb-3">
                                    <div className="col-sm-2">Complete</div>
                                    <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" value={taskData.complete} name='complete' onClick={()=>{(taskData.complete==true)?taskData.complete=false:taskData.complete=true}} type="checkbox" id="gridCheck1"/>
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Yes
                                        </label>
                                    </div>
                                    </div>
                                </div> */}
                                <hr/>
                                <div className="mb-3">
                                    <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary" onClick={addTask}>Add</button>
                                    {taskData.status=='success' && <p className='text-success'>Your goals have been set. </p>}
                                    {taskData.status=='error' && <p className='text-danger'>Something wrong happened. </p>}
                                    </div>
                                </div>
                            
                        </div>
                    </div>    
                    <a href='/viewgoals'>View your goals.</a>
                </section>
            </div>
        </div>
    )
}