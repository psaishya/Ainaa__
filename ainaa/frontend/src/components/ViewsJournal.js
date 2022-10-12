import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function ViewJournals() {
    const Swal = require('sweetalert2')

    const loggeduser=localStorage.getItem('loggeduser');
    const[journaldata,setJournaldata]=useState(
        {
        'id':'',
        'user':loggeduser,
        'title':'',
        'description':'',
        'create':'',
        },
      );
    useEffect(()=>{
        try{
            axios.get('/api/userjournal/'+loggeduser).then((response)=>{
            setJournaldata(response.data);
            
 
        });
        }catch(error){
            console.log(error); 
        }
        
    },[]);
    // console.log(taskdata);
    const handledelete=(journalid)=>{ 
        Swal.fire({
            title: 'Confirm?',
            text: 'Are you sure you want to delete this task?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true,

          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete('/api/journaltime/'+journalid)
                    .then((response)=>{
                        window.location.reload();
                       
                    });
                    Swal.fire('Success','Journal has been deleted.');
                }
                catch(error){
                    Swal.fire('Error','Journal has not been deleted!');

                }

            }
            else{
                Swal.fire('error','Journal could not be deleted!');

            }
          })
    }
    const[newjournaldata,setnewJournaldata]=useState(
        {
        'id':'',
        'user':loggeduser,
        'title':'',
        'description':'new dwdgkhbytdrtdbytv',
        'create':'',
        },
      );
      const newjournalFormData=new FormData();
            newjournalFormData.append("user",newjournaldata.title)
            newjournalFormData.append("user",newjournaldata.description)
    
    // const handleedit=(journalid,event)=>{ 
    //     event.preventDefault();
    //     console.log(journalid);

    //     try{
    //         console.log(journalid);

    //         axios.patch('/api/journaltime/'+journalid+'/',newjournalFormData).then((response)=>{
    //         console.log(response.data);
    //         window.location.reload();

    //     });
    //     }catch(error){
    //         console.log(error); 
    //     }
        
    // }
    

  return (
    <>
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Sidebar/>
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h1 className='card-header'>My Journals </h1>
                    <div className='card-body'>
                    {Array.from(journaldata).map((journal,index) =>

                        // {taskdata.map((task,index)=>
                        {return(

                    <div key={index} className="accordion accordion-flush" id="accordionFlushExample" >
                        
                        <div className="accordion-item" >
                            
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <div>{journal.title}</div>   
                                
                            </button>  
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>Description : {journal.description}</p>
                                    <p>Created on : {journal.create}</p>
                                    <button onClick={()=>handledelete(journal.id)} className='btn btn-danger btn-sm active float-end me-2' ><i className="bi bi-trash3"></i> </button>
                                    <a class="btn btn-info float-end me-2" href="/editjournals" role="button">Edit</a>
                                    

                                </div>

                            </div>
                          
                    
                    </div>
                       
                      
                    </div>

                    )})} 
                    <hr/>
                   <a href='/addjournals'>Add more?</a>
                   {/* {console.log(taskdata)} */}

                    </div>
                </div>

                
            </section>
        </div>
    </div>
    </>
  )
}