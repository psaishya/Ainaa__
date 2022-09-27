import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
// import { withRouter } from "react-router";

export default class Mainscreen extends Component {
  constructor(props){
    super(props)
  
  this.state={
    firstname:'hello',
    lastname: "",
    gender: "",
    email: "",
    username:"",
    password: "",

  };
  const username=useParams();
  this.username=this.props.match.params.username;
  // console.log(this.props.match.params.username);
  }
  // myfunc(){
  //   let {usernames}=useParams()
  // }
  // let {username}=useParams()
    render() {
    return (
      <div>
        <p>inside main</p>
        {/* <p>{username}</p> */}
        {/* <p>{this.username}</p> */}
        <p>FirstName:{this.state.firstname}</p>
        <p>LastName:{this.state.lastname}</p>
        <p>Gender:{this.state.gender}</p>
        <p>Email:{this.state.email}</p>
        <p>UserName:{this.state.username}</p>
        <p>Password:{this.state.password}</p>
        <h2>he usrnamenis {username}</h2>
      </div>
    )
  }
}
