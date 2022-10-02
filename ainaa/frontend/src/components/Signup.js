import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
const baseurl='/api/user/'
export default function Signup() {
  const[userData,setuserData]=useState(
    {
      'firstname':'',
    'lastname':'',
    'gender':'',
    'email':'', 
    'username':'',
    'password':'',
    'status':'',
    }
  );
  const handleChange=(event)=>{
    setuserData({
      ...userData,
      [event.target.name]:event.target.value
    }); 
  };
  const submitForm=(event)=>{
    console.log(userData);
    alert(userData);
    const userFormData=new FormData();
    userFormData.append("firstName",userData.firstname)
    userFormData.append("lastName",userData.lastname)
    userFormData.append("gender",userData.gender)
    userFormData.append("email",userData.email)
    userFormData.append("userName",userData.username)
    userFormData.append("password",userData.password)
    
    event.preventDefault();
    try{
      axios.post('/api/user/',userFormData).then((response)=>{
      console.log(response.data );
      setuserData({
        'firstname':'',
      'lastname':'',
      'gender':'',
      'email':'', 
      'username':'',
      'password':'',
      'status':'success',
      })
    })
    }
    catch(error){
      console.log(error);
      setuserData({'status':'error'})
    }
    
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <h3 className="card-header">User Registration</h3>
              <div className="card-body">
                <form>
                  
                  <div className="mb-3">
                        <label htmlFor="exampleInputFirstname">FirstName</label>
                        <input
                              value={userData.firstname}
                              onChange={handleChange}
                              type="text"
                              placeholder="Enter your first name"
                                name="firstname"
                                required
                                className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputFirstname">LastName</label>
                        <input
                              value={userData.lastname}
                                   onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your last name"
                                     name="lastname"
                                     required
                                className="form-control" />
                      </div>



                      <div className="mb-3">
                        <label htmlFor="exampleInputGender">Gender</label>
                        <input
                               type="radio" value="Male" 
                              onChange={handleChange}
                              name="gender" required 
                              />
                      
                          <label>
                            <b>Male</b>
                          </label>
                        

                          <input
                               type="radio" value="Female" 
                              onChange={handleChange}
                               name="gender" required 
                               />
                      
                          <label>
                            <b>Female</b>
                          </label>
                          
                          
                      </div>
                    
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail">Email</label>
                        <input
                               type="email"
                                           placeholder="Enter email"
                                           value={userData.email}
                                          onChange={handleChange}
                                           name="email"
                                           required
                                className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputUsername">UserName</label>
                        <input
                            value={userData.username}
                             placeholder="Enter username"
                                        onChange={handleChange}
                                         type="text"
                                         name="username"
                                         required
                                className="form-control" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                             type="password"
                             placeholder="Enter password"
                             value={userData.password}
                                        onChange={handleChange}
                                         name="password"
                                         required
                           className="form-control" />
                      </div>

                  {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div> */}
                  <button onClick={submitForm} type="submit" className="btn btn-primary">
                    Signup
                  </button>
                  <div className="notregister" href="#" title="Register here">
                            <a href="/login">Already registered? </a>
                         </div>

                  {userData.status=='success' && <p className='text-success'>Thanks for your registration. </p>}
                  {userData.status=='error' && <p className='text-danger'>Something wrong happened. </p>}

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



