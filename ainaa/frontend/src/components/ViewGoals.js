import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function ViewGoals() {
    const Swal = require('sweetalert2')

    const loggeduser=localStorage.getItem('loggeduser');
    const[taskdata,setTaskdata]=useState(
        {
        'id':'',
        'user':loggeduser,
        'title':'',
        'description':'',
        'type':'',
        'complete':'',
        'create':'',
        },
      );
      useEffect(()=>{
        try{
            axios.get('/api/usertask/'+loggeduser).then((respose)=>{
            setTaskdata(respose.data);
            
 
        });
        }catch(error){
            console.log(error); 
        }
        
    },[]);
    console.log(taskdata);
    const handledelete=(taskid)=>{ 
        Swal.fire({
            title: 'Confirm?',
            text: 'Are you sure you want to delete this task?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true,

          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete('/api/tasktime/'+taskid)
                    .then((respose)=>{
                        window.location.reload();
                        // console.log(respose);
                        // setTaskdata(respose.data);
                    });
                    Swal.fire('success','Task has been deleted.');
                }
                catch(error){
                    Swal.fire('error','Task has not been deleted!');

                }

            }
            else{
                Swal.fire('error','Task could not be deleted!');

            }
          })
    }

    const handleedit=(taskid,event)=>{ 
        setTaskdata({   
            'id':taskid,
            'user':loggeduser,
            'title':'',
            'description':'i changed ',
            'type':'',
            'complete':true,
            'create':'', 
            'status':'',
        });
        
        const userFormData=new FormData();
        userFormData.append("description",taskdata.description)
        userFormData.append("complete",taskdata.complete)
        
     
        // event.preventDefault();
        try{ 
          
    
            axios.put('/api/tasktime/'+taskid+'/',userFormData)
            .then((response)=>{
                
            console.log(response.data );
          })
          }
          catch(error){
            console.log(error);
            settaskData({'status':'error'})
          }}
  return (
    <>
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Sidebar/>
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h1 className='card-header'>Tasks to be completed </h1>
                    <div className='card-body'>
                    {Array.from(taskdata).map(task =>
                        // {taskdata.map((task,index)=>
                        {return(<>
                    <div className="accordion accordion-flush" id="accordionFlushExample" >
                        
                        <div className="accordion-item" key={task}>
                            
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <div>{task.title}</div>   
                                
                            </button>  
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Description : {task.description}</p>
                                    <p>Type : {task.type}</p>
                                    <p>Created on : {task.create}</p>
                                    <p>Completed : {toString(task.complete)}</p>
                                    <button onClick={()=>handledelete(task.id)} className='btn btn-danger btn-sm active float-end me-2' ><i className="bi bi-trash3"></i> </button>
                                    {/* <Link to={'/editgoal/'+task.id} className='btn btn-success btn-sm active float-end me-2' ><i className="bi bi-check-circle-fill"></i></Link> */}
                                    <button onClick={()=>handleedit(task.id)} className='btn btn-success btn-sm active float-end me-2' ><i className="bi bi-check-circle-fill"></i></button>


                                </div>

                            </div>
                          
                    
                    </div>
                       
                      
                    </div>
                    </>
                    )})} 
                    <hr/>
                   <a href='/addgoals'>Add more?</a>
                   {console.log(taskdata)}

                    </div>
                </div>

                
            </section>
        </div>
    </div>
    </>
  )
}
