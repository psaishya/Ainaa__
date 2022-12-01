import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";


export default function Forgotpw() {
    const[errorMsg,seterrorMsg]=useState('');

    const [userData,setuserData]=useState(
        {
          'userName':'',
          'password':'',
        }
      );
      const handleChange=(event)=>{
        setuserData({
          ...userData,
          [event.target.name]:event.target.value
        });
      }
      const[updateuserData,setupdateuserData]=useState(
        {
        'firstName':'',
        'lastName':'',
        'gender':'',
        'email':'', 
        'userName':'',
        'password':'',
        'status':'',
        }
      );
      const submitForm=(event)=>{
        console.log(userData);
        // alert(loginData);
        const userFormData1=new FormData;
        userFormData1.append('userName',userData.userName)

        // const userFormData=new FormData;
        // userFormData.append('userName',userData.userName)
        // userFormData.append("password",userData.password)

        const userFormData=new FormData();
        userFormData.append("firstName",updateuserData.firstName)
        userFormData.append("lastName",updateuserData.lastName)
        userFormData.append("gender",updateuserData.gender)
        userFormData.append("email",updateuserData.email)
        userFormData.append("userName",userData.userName)
        userFormData.append("password",userData.password)
        
        event.preventDefault();
        
    
        try{
           
                axios.post('/api/loggeduser',userFormData1).then((response)=>{
                    const userid=response.data.id;
                    localStorage.setItem('user',userid);        
                    // window.location.href='/login';
                   
                
                    event.preventDefault();
                try{
                    axios.put('/api/user/'+newuser+'/',userFormData).then((response)=>{
                    console.log(response.data );
                    
                    
                    setupdateuserData({'status':'success'})

                  })
                  }
                  catch(error){
                    setupdateuserData({'status':'error'})
                    console.log(error);

                  }
              
            } );  
          
        }
        catch(error){

            setupdateuserData({'status':'error'})

          console.log(error);
          console.log(errorMsg);

        }
        
        const newuser=localStorage.getItem('user');
        
           
        
      }
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card" style={{backgroundColor: "#16202a"}}>
              <h3 className="card-header">Change password</h3>
              <div className="card-body">
                <form>
                <div className="mb-3">
                        <label htmlFor="exampleInputUsername">UserName</label>
                        <input
                              value={userData.userName}
                              onChange={handleChange}
                              type="text"
                              placeholder="Enter your user name"
                                name="userName"
                                required
                                className="form-control" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">New Password</label>
                        <input
                             type="password"
                             placeholder="Enter new password"
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
                  <button type="submit" onClick={submitForm} className="btn btn-primary">
                    Update
                  </button>
                  <div className="notregister" href="#" title="Forgot password">
                            <a href="/login" style={{color:'white'}}>Login </a>
                         </div>
                         {updateuserData.status=='success' && <p className='text-success'>Password has been changed. </p>}
                  {updateuserData.status=='error' && <p className='text-danger'>Username not found. </p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
