import React from 'react';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddJournals(){
    const Swal = require('sweetalert2')
    const loggeduser=localStorage.getItem('loggeduser');
    const[journalData,setjournalData]=useState(
        {
            'user':loggeduser,
            'title':'',
            'description':'',
            'create':'',
            'status':'',
        }
    );
    const handleChange=(event)=>{
        setjournalData({
          ...journalData,
          [event.target.name]:event.target.value
        }); 
      };
      const addJournal=(event)=>{
        console.log(journalData);
        const userFormData=new FormData();
        userFormData.append("user",journalData.user)
        userFormData.append("title",journalData.title)
        userFormData.append("description",journalData.description)
        userFormData.append("create",journalData.create)

        
        event.preventDefault();
        try{
            axios.post('/api/journal/',userFormData,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((response)=>{
                    
                console.log(response.data );
                setjournalData({
                    'user':loggeduser,
                    'title':'',
                    'description':'',
                    'create':journalData.create,
                    'status':'success',
                });
                // const notifData=new FormData();
                // notifData.append('user',loggeduser);
                // notifData.append('notif_title',journalData.title);

            //     axios.post('/api/notifications/'+loggeduser+'/',notifData,{
            //         headers:{
            //             'Content-Type':'application/json'
            //         }
            //     })
            //     .then((response)=>{console.log('Notification added');
            // })
            Swal.fire('Success','Journal has been successfully added.');
          })
          }
          catch(error){
            console.log(error);
            setjournalData({'status':'error'})
          }
          
          
        };
        
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className='card' style={{backgroundColor: "#16202a"}} >
                        <h5 className="card-header">Create Journal</h5>
                        <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                    <input defaultValue={journalData.title} type="text" className="form-control" onChange={handleChange} placeholder="Enter title" name='title' required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Description" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                    <textarea defaultValue={journalData.description} className="form-control" rows="10" onChange={handleChange}  placeholder="Enter description" name = 'description'required/>
                                    </div>
                                </div>
                                
                                <hr/>
                                <div className="mb-3">
                                    <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary" onClick={addJournal}>Create</button>
                                    {/* {journalData.status=='success' && <p className='text-success'>Your journal have been created. </p>}
                                    {journalData.status=='error' && <p className='text-danger'>Something wrong happened. </p>} */}
                                    </div>
                                </div>
                            
                        </div>
                    </div>    
                    <a href='/viewjournals' style={{ color:'white'}}>View your journals.</a>
                   
                    
                </section>
            </div>
        </div>
    )
}