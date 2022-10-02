import React from 'react';
// import Lando from "../img/naruto-37656.png";
import Lando from "../images/Lando.png"; 
document.body.style.color='red';

export default function Home() {
  return (
    <div className="container">  
      <div className='container mt-4'>
      <h3 className='pb-1 mb-4'>Welcome to Aainaa where you can</h3>
      <div className='row'>
        <div className='col-md-3'>
        <div className="card">
          <img className="card-img-top" src={Lando} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
        <div className="card">
          <img className="card-img-top" src={Lando} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
        <div className="card">
          <img className="card-img-top" src={Lando} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
        <div className="card">
          <img className="card-img-top" src={Lando} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        </div>
      </div>

      
    </div>
    </div>
  )
}
