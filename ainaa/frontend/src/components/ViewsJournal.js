import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

// const baseurl=
export default function ViewJournals() {
    const Swal = require('sweetalert2')
    const[prevurl,setprevurl]=useState([]);
    // const[currenturl,setcurrenturl]=useState([]);
    const[nexturl,setnexturl]=useState([]);

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
            setJournaldata(response.data.results);
            console.log(journaldata);

            setnexturl(response.data.next);
            setprevurl(response.data.previous);
            
 
        });
        }catch(error){
            console.log(error); 
        }
        
    },[]);

    const handlepagination=(url)=>{
        try{
            axios.get(url).then((response)=>{
            setJournaldata(response.data.results);
            console.log(journaldata);

            setnexturl(response.data.next)
            setprevurl(response.data.previous)
            
 
        });
        }catch(error){
            console.log(error); 
        }
    }
    // console.log(taskdata);
    const handledelete=(journalid)=>{ 
        Swal.fire({
            title: 'Confirm?',
            text: 'Are you sure you want to delete this log?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true,

          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete('/api/journaltime/'+journalid)
                    .then((response)=>{
                        // window.location.reload();
                       
                            handlepagination(nexturl);
                       
                        
                    
                   
                Swal.fire('Success','Journal has been deleted.');
                    });
                    
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
    
    

  return (
    


    <>
        <div className='container mt-4'>
            <div className='row'>
            <aside className='col-md-3'>
                 <Sidebar/>
             </aside>
             <section className='col-md-9'>
                <div className='card' style={{backgroundColor: "#16202a"}}>
                     <h1 className='card-header'>My Journals </h1>
                     <hr/>

                     <div className='card-body'  style={{color: "white"}}>
                        {Array.from(journaldata).map((journal,index) =>

                    // {taskdata.map((task,index)=>
                     {return(
                        <div key={index}>
                        <p><h3>{journal.create}</h3></p>
                        <h5><b>{journal.title}</b></h5>
                        <p>{journal.description}</p>
                        <button onClick={()=>handledelete(journal.id)} className='btn btn-danger btn-sm active float-end me-2' ><i className="bi bi-trash3"></i> </button>

                     </div>
                     )})}
                     </div>
                     
                </div>
                <a href='/addjournals' style={{ color:'white'}}>Add more?</a>

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        {prevurl &&
                        <li className="page-item"><button className="page-link" onClick={()=>handlepagination(prevurl)} ><i className="bi bi-arrow-left-circle"></i> Previous</button></li>
                        }
                        {nexturl &&
                        <li className="page-item"><button className="page-link" onClick={()=>handlepagination(nexturl)}>Next <i className="bi bi-arrow-right-circle"></i></button></li>
                        }
                    </ul>
                    </nav>
             </section>
            </div>
        </div>
{console.log(journaldata)}
    </>
  )
}