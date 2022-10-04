import React from 'react'
import Sidebar from './Sidebar'
import { useState,useEffect } from 'react';

export default function ViewTasks() {
    const loggeduser=localStorage.getItem('loggeduser');
    const[taskdata,setTaskdata]=useState(
        {
        'title':'',
        'description':'',
        'type':'',
        'datecreated':'', 
        }
      );

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
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <div>{taskdata.title}</div>   
                                
                            </button> 
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Description : {taskdata.description}</p>
                                    <p>Type : {taskdata.type}</p>
                                    <p>Created on : {taskdata.datecreated}</p>
                                    <button className='btn btn-danger btn-sm active float-end me-2' >Delete</button>
                                    <button className='btn btn-success btn-sm active float-end me-2' >Completed</button>


                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <hr/>
                   <a href='/'>Add more?</a>
                    </div>
                </div>

                
            </section>
        </div>
    </div>
    </>
  )
}
