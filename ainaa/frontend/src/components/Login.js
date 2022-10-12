import React from "react";
import { useEffect,useState } from 'react';
import axios from "axios";

// localStorage.setItem('userLoginStatus',null)
export default function Login() {
  useEffect(()=>{
    document.title='Login';
  });

  const [loginData,setLoginData]=useState(
    {
      'userName':'',
      'password':'',
    }
  );
  const[errorMsg,seterrorMsg]=useState('');
  const handleChange=(event)=>{
    setLoginData({
      ...loginData,
      [event.target.name]:event.target.value
    });
  }
  const submitForm=(event)=>{
    console.log(loginData);
    // alert(loginData);
    const loginFormData=new FormData;
    loginFormData.append('userName',loginData.userName)
    loginFormData.append('password',loginData.password)

    const loggedFormData=new FormData;
    loggedFormData.append('userName',loginData.userName)

    event.preventDefault();
    

    try{
      axios.post('/api/userlogin',loginFormData).then((response)=>{
        console.log(response.data);
        if(response.data.bool==true){
          localStorage.setItem('userLoginStatus',true)
          console.log(localStorage.getItem('userLoginStatus'));

          axios.post('/api/loggeduser',loggedFormData).then((response)=>{
          const id=response.data.id;
          localStorage.setItem('loggeduser',id);
          console.log(localStorage.getItem('loggeduser'));

          window.location.href='/dashboard';
          
          event.preventDefault();
          
        } );  
  
          
          // setuserloginstatus(localStorage.getItem('userLoginStatus'));
          
          // setloginstatus('true'); ////////////kaam chalau wala
        }
        else{
          localStorage.setItem('userLoginStatus',false)
          // alert("Could not login");
          seterrorMsg('Invalid Username or Password')
        }
        
        
      });
    }
    catch(error){
      console.log(error);
    }
  // setuserloginstatus(localStorage.getItem('userLoginStatus'));
  // console.log(userLoginStatus);
  // if(userLoginStatus=='true'){
  //   window.location.href='/homepage';
  // }
  // else{
  //   alert("Could not login");
  // }
  //  }
  
       
    
  }
  
  // 
  ////////////////kaam chalau method
  // if(loginstatus=='true'){
  //   window.location.href='/homepage';
  // }
////////////////////
  
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card" style={{backgroundColor: "#16202a"}}>
              <h3 className="card-header">User Login</h3>
              <div className="card-body">
                {errorMsg&&<p className="text-danger">{errorMsg}</p>}
                <form>
                <div className="mb-3">
                        <label htmlFor="exampleInputUsername">UserName</label>
                        <input
                              value={loginData.userName}
                              onChange={handleChange}
                              type="text"
                              placeholder="Enter your user name"
                                name="userName"
                                required
                                className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                             type="password"
                             placeholder="Enter password"
                             value={loginData.password}
                                        onChange={handleChange}
                                         name="password"
                                         required
                           className="form-control" />
                      </div>
                  {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div> */}
                  <button type="submit" onClick={submitForm} className="btn btn-primary">
                    Login
                  </button>
                  <div className="notregister" href="#" title="Register here">
                            <a href="/signup" style={{color:'white'}}>Not registered yet? </a>
                         </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

 