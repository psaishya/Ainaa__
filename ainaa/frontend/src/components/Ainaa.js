import React from 'react'
import Sidebar from './Sidebar'
import viewjournal from "../images/viewjournal.jpg";
import viewtask from "../images/viewtask.jpg";


export default function Ainaa() {
    const cardstyle={
        width: 18
    }
  return (
    <div>
      <div className='container mt-4'>
      <div className='row'>
      <aside className='col-md-3'> 
                <Sidebar/>
            </aside>
       
        <section className='col-md-4 ' >
            
             <div className="card me-10" style={{backgroundColor: "#16202a"}} >
                <img src={viewtask} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">My goals</h5>
                    <p className="card-text">View the goals you set and their details.</p>
                    <a href="/viewgoals" className="btn btn-primary">View</a>
                </div>
             </div>
            
        </section>
        <section className='col-md-4 '>
            
             <div className="card me-10" style={{backgroundColor: "#16202a"}}>
                <img src={viewjournal} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">My journals</h5>
                    <p className="card-text">Take a glance at your memories.</p>
                    <a href="/viewjournals" className="btn btn-primary">View </a>
                </div>
             </div>
            
        </section>
        
      </div>
    </div>
    </div>
    
  )
}