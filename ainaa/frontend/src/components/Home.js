import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Naruto from "../img/naruto-37656.png";
import {Link} from 'react-router-dom';
import { useEffect } from 'react';


 
// import { useParams } from 'react-router-dom';
// // import { withRouter } from "react-router";

// export default className Mainscreen extends Component {
//   constructor(props){
//     super(props)
  
//   this.state={
//     firstname:'hello',
//     lastname: "",
//     gender: "",
//     email: "",
//     username:"",
//     password: "",

//   };
//   const username=useParams();
//   this.username=this.props.match.params.username;
//   // console.log(this.props.match.params.username);
//   }
//   // myfunc(){
//   //   let {usernames}=useParams()
//   // }
//   // let {username}=useParams()
//     render() {
//     return (
//       <div>
//         <p>inside main</p>
//         {/* <p>{username}</p> */}
//         {/* <p>{this.username}</p> */}
//         <p>FirstName:{this.state.firstname}</p>
//         <p>LastName:{this.state.lastname}</p>
//         <p>Gender:{this.state.gender}</p>
//         <p>Email:{this.state.email}</p>
//         <p>UserName:{this.state.username}</p>
//         <p>Password:{this.state.password}</p>
//         <h2>he usrnamenis {username}</h2>
//       </div>
//     )
//   }
// }


function Home(){
  useEffect(()=>{
    document.title='Home';
});
  return(
    
    <div className='container mt-4'>
      <h3 className='pb-1 mb-4'>Welcome to Aainaa where you can</h3>
      <div className='row'>
        <div className='col-md-3'>
        <div class="card">
          <img class="card-img-top" src={Naruto} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
        <div class="card">
          <img class="card-img-top" src={Naruto} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
        <div class="card">
          <img class="card-img-top" src={Naruto} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
        </div>
        <div className='col-md-3'>
        <div class="card">
          <img class="card-img-top" src={Naruto} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
        </div>
      </div>

      
    </div>

  
    

  );
}
export default Home;