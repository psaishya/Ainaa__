import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
import CSRFToken from './Csrftoken';
// import {useNavigate} from 'react-router-dom';
export default class SignupPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      username:"",
      password: "",
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
   
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit(event){
    const{firstname,lastname,gender,email,username,password}=this.state
    event.preventDefault()
    alert(` Your details
    FirstName:${firstname}
    LastName:${lastname}
    Gender:${gender}
    Email:${email}
    UserName:${username}
    Password:${password}`)
    console.log('hello');

    const requestOptions={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            firstName:this.state.firstname,
            lastName:this.state.lastname,
            gender:this.state.gender,
            email:this.state.email,
            userName:this.state.username,
            password:this.state.password

        })
    };
    // const navigate = useNavigate();
    fetch('/api/signup',requestOptions).then((response)=>response.json()).then((data)=>console.log(data));
    console.log('hello');
     
  }
  
  render() {
    return (
      <div>
        <h2>This is the signup page.</h2>
        <div>
          <center>
            <h1>Registration form </h1>
          </center>
          <form action="#" method="post" onSubmit={this.handleSubmit}>
            <CSRFToken/>
            {/* {% csrf_token %}
            {% load static %} */}
            <center>
              <div class="container">
                {/* <div class="imgcontainer">
                    <img src="{% static 'avatar_img2.png' %}" alt="Avatar" class="avatar"/>
                </div> */}
                <label htmlfor="firstname">
                  <b>First Name : </b>
                </label>
                <input
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter your first name"
                  name="firstname"
                  required
                />
                <br />
                <label htmlfor="lastname">
                  <b>Last Name :</b>
                </label>
                <input
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter your last name"
                  name="lastname"
                  required
                />
                <br />
                <label htmlfor="gender">
                  <b>Gender : </b>
                </label>
                <input type="radio" value="Male" onChange={this.handleChange}name="gender" required />
                <label>
                  <b>Male</b>
                </label>
                <input type="radio" value="Female"onChange={this.handleChange} name="gender" required />
                <label>
                  <b>Female</b>
                </label>
                <br />
                <label htmlfor="email">
                  <b>Email Id : </b>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  float="right"
                  required
                />
                <br />
                <label htmlfor="username">
                  <b>Username : </b>
                </label>
                <input
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter your user name"
                  name="username"
                  required
                />
                <br/>
                <label htmlfor="password">
                  <b>Password : </b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  required
                />
                <br />
                <button type="submit" >
                  <b>Signup</b>
                </button>
                <br />
                Already an account <a href="/login"> Login </a>
              </div>
            </center>
          </form>
        </div>
      </div>
    );
  }
}
