import React from 'react';

import Task from "../images/demotask.jpg";
import Journal from "../images/journal.jpg";
import todo from "../images/todo.jpg"
import male from "../images/male.png"
import female from "../images/female.png"
import window from "../images/window.jpg"





// document.body.style.color='red';

export default function Home() {
  return (  
<>
<br/>
<br/>
<div className='container'><h1>Welcome to Ainaa</h1><br/></div>


<div className='container' align="center">
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
    
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Task} className="d-block " alt="..." width="600" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Journal} className="d-block " alt="..." width="600" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={todo} className="d-block " alt="..." width="600" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={male} className="d-block " alt="..." width="600" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={female} className="d-block " alt="..." width="600" height="400"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={window} className="d-block " alt="..." width="600" height="400"/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</> 


    // <div className="container">  
    //   <div className='container mt-4'>
    //   <h3 className='pb-1 mb-4'>Welcome to Aainaa where you can</h3>
    //   {/* <div className='column'> */}
    //     <div className='col-md-3'>
    //     <div className="card">
    //       <img className="card-img-top" src={Lando} alt="Card image cap"/>
    //       <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //       </div>
    //     </div>
    //     </div>
    //     <div className='col-md-3'>
    //     <div className="card">
    //       <img className="card-img-top" src={Lando} alt="Card image cap"/>
    //       <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //       </div>
    //     </div>
    //     </div>
    //     <div className='col-md-3'>
    //     <div className="card">
    //       <img className="card-img-top" src={Lando} alt="Card image cap"/>
    //       <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //       </div>
    //     </div>
    //     </div>
    //     <div className='col-md-3'>
    //     <div className="card">
    //       <img className="card-img-top" src={Lando} alt="Card image cap"/>
    //       <div className="card-body">
    //         <h5 className="card-title">Card title</h5>
    //       </div>
    //     </div>
    //     </div>
    //   {/* </div> */}

      
    // </div>
    // </div>
  )
}
