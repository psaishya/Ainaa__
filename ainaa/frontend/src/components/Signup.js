import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
import CSRFToken from './Csrftoken';
// import {useNavigate} from 'react-router-dom';

export default class SignupPage extends Component {
  componentDidMount(){
    document.title = "Signup"
  }
  constructor(props) {
    super(props); 
    this.state = {
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      username:"",
      password: "",
      status:"",
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
   
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit(event){
    const{firstname,lastname,gender,email,username,password,status}=this.state
    event.preventDefault()
    alert(` Your details
    FirstName:${firstname}
    LastName:${lastname}
    Gender:${gender}
    Email:${email}
    UserName:${username}
    Password:${password}
    Status:${status}`)
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
    try{fetch('/api/Usar',requestOptions).then((response)=>response.json()).then((data)=>console.log(data));
      this.state.status='success'
  }
    catch(error){
      console.log(error);
      this.state.status='error'
    }
   
     
  }
  
  render() {
    return (
      // <div>
      //   <h2>This is the signup page.</h2>
      //   <div>
      //     <center>
      //       <h1>Registration form </h1>
      //     </center>
      //     <form action="#" method="post" onSubmit={this.handleSubmit}>
      //       <CSRFToken/>
      //       {/* {% csrf_token %}
      //       {% load static %} */}
      //       <center>
      //         <div class="container">
      //           {/* <div class="imgcontainer">
      //               <img src="{% static 'avatar_img2.png' %}" alt="Avatar" class="avatar"/>
      //           </div> */}
      //           <label htmlfor="firstname">
      //             <b>First Name : </b>
      //           </label>
      //           <input
      //             value={this.state.firstname}
      //             onChange={this.handleChange}
      //             type="text"
      //             placeholder="Enter your first name"
      //             name="firstname"
      //             required
      //           />
      //           <br />
      //           <label htmlfor="lastname">
      //             <b>Last Name :</b>
      //           </label>
      //           <input
      //             value={this.state.lastname}
      //             onChange={this.handleChange}
      //             type="text"
      //             placeholder="Enter your last name"
      //             name="lastname"
      //             required
      //           />
      //           <br />
      //           <label htmlfor="gender">
      //             <b>Gender : </b>
      //           </label>
      //           <input type="radio" value="Male" onChange={this.handleChange}name="gender" required />
      //           <label>
      //             <b>Male</b>
      //           </label>
      //           <input type="radio" value="Female"onChange={this.handleChange} name="gender" required />
      //           <label>
      //             <b>Female</b>
      //           </label>
      //           <br />
      //           <label htmlfor="email">
      //             <b>Email Id : </b>
      //           </label>
      //           <input
      //             type="email"
      //             placeholder="Enter email"
      //             value={this.state.email}
      //             onChange={this.handleChange}
      //             name="email"
      //             float="right"
      //             required
      //           />
      //           <br />
      //           <label htmlfor="username">
      //             <b>Username : </b>
      //           </label>
      //           <input
      //             value={this.state.username}
      //             onChange={this.handleChange}
      //             type="text"
      //             placeholder="Enter your user name"
      //             name="username"
      //             required
      //           />
      //           <br/>
      //           <label htmlfor="password">
      //             <b>Password : </b>
      //           </label>
      //           <input
      //             type="password"
      //             placeholder="Enter Password"
      //             value={this.state.password}
      //             onChange={this.handleChange}
      //             name="password"
      //             required
      //           />
      //           <br />
      //           <button type="submit" >
      //             <b>Signup</b>
      //           </button>
      //           <br />
      //           Already an account <a href="/login"> Login </a>
      //         </div>
      //       </center>
      //     </form>
      //   </div>
      // </div>




      // {newsignup}
      <div className='container mt-4'>
      <div className='row'>
        <div className='col-6 offset-3'>
        {this.state.status=='success'&& <p className="text-success">Thanks for your registration</p>}
         {this.state.status=='error'&& <p className="text-success">Error occured. Try again</p>}
          <div className='card'>
            <h3 className='card-header'>User Registration</h3>
            <div className='card-body'>
            <form action="#" method="post" onSubmit={this.handleSubmit}>
              <CSRFToken/>
              {this.state.status=='success' && <p className="text-success">Thanks for your registration</p>}
              {this.state.status=='error'&& <p className="text-danger">Error occured. Try again</p>}
                      <div className="mb-3">
                        <label for="exampleInputFirstname">FirstName</label>
                        <input
                              value={this.state.firstname}
                              onChange={this.handleChange}
                              type="text"
                              placeholder="Enter your first name"
                                name="firstname"
                                required
                                className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label for="exampleInputFirstname">LastName</label>
                        <input
                              value={this.state.lastname}
                                          onChange={this.handleChange}
                                          type="text"
                                          placeholder="Enter your last name"
                                          name="lastname"
                                          required
                                className="form-control" />
                      </div>



                      <div className="mb-3">
                        <label for="exampleInputGender">Gender</label>
                        <input
                               type="radio" value="Male" onChange={this.handleChange}name="gender" required 
                              />
                      
                          <label>
                            <b>Male</b>
                          </label>
                        

                          <input
                               type="radio" value="Female" onChange={this.handleChange}name="gender" required 
                               />
                      
                          <label>
                            <b>Female</b>
                          </label>
                          
                          
                      </div>
                    
                      <div className="mb-3">
                        <label for="exampleInputEmail">Email</label>
                        <input
                               type="email"
                                           placeholder="Enter email"
                                           value={this.state.email}
                                           onChange={this.handleChange}
                                           name="email"
                                           required
                                className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label for="exampleInputUsername">UserName</label>
                        <input
                             value={this.state.username}
                             placeholder="Enter username"
                                         onChange={this.handleChange}
                                         type="text"
                                         name="username"
                                         required
                                className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                             type="password"
                             placeholder="Enter password"
                                        value={this.state.password}
                                         onChange={this.handleChange}
                                         name="password"
                                         required
                           className="form-control" />
                      </div>

                      <button type="submit" className="btn btn-primary">Register</button>

                      <div className="registered" href="#" title="Login here">
                            <a href="/login">Already an account? </a>
                      </div>
                     
                    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
