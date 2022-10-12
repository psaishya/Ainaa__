import React from 'react'
import Sidebar from './Sidebar'
import Lando from "../images/Lando.png"; 


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
       
        <section className='col-md-4 '>
            
             <div className="card me-10" >
                <img src={Lando} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Your goals</h5>
                    <p className="card-text">View the goals you set and their details.</p>
                    <a href="/viewgoals" className="btn btn-primary">View</a>
                </div>
             </div>
            
        </section>
        <section className='col-md-4 '>
            
             <div className="card me-10" >
                <img src={Lando} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Your journals</h5>
                    <p className="card-text">Something abaout journals</p>
                    <a href="/viewjournals" className="btn btn-primary">View </a>
                </div>
             </div>
            
        </section>
        
      </div>
    </div>
    </div>
    
  )
}