import React from 'react'
import CSRFToken from './Csrftoken';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const handleChangeu=(event)=>{
        // ({[target.name]:target.value})
        setUsername(event.target.value);
  }
  const handleChangep=(event)=>{
    setPassword(event.target.value);
  }
  const navigate = useNavigate();
  const loginbuttonpressed=(event)=>{
        event.preventDefault()
        // alert("wtygdsj");
        alert(username);
        // console.log('login button pressed');
        // console.log(this.state.username);
        // console.log('hello');
        const requestOptions={
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
              userName:username,
              password:password
    
          })
        };
        // // fetch('/api/login',requestOptions).then((response)=>response.json()).then((data)=>console.log(data));
        fetch("api/login",requestOptions).then((Response)=>{
          if(Response.ok){
            alert('yahoo');
            navigate(`/main/${username}`);
    
            // history.pushState(`/user/${this.state.username}`)
          }
          else{
            alert('User not found')
          }
        }).catch((error)=>{
          console.log("error aayo hai");
          console.log(error);
        });
    
      }
  return (
    <div>
           <div>
       <h2>This is the login page. new login page again again</h2>
        <div className="center">
        <div className="login-form-container">
             <div className="text">LOGIN</div>
             <form action="#" method="post" id="formforlogin" onSubmit={loginbuttonpressed}>
               <CSRFToken/>
              
               {/* {% csrf_token %} 
               {% load static %} */}
                <div className="input-data">
                     <label htmlFor= "username">
                      <b>User Name : </b>
                     </label>
                     <input
                      value={username}
                      onChange={handleChangeu}
                      type="text"
                      placeholder="Enter your user name"
                      name="username"
                      required
                    />
                </div>
                
                <div className="input-data">
                    <label htmlFor ="password">
                      <b>Password : </b>
                    </label>
                    <input
                      value={password}
                      onChange={handleChangep}
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      required
                    />
                </div>
                <div className="notregister" href="#" title="Register here">
                  <a href="/signup">Not registered yet? </a>
                </div>
                
                <div className="btn">
                    <div className="insidebtn">
                        <button type="submit" ><b>Login</b></button><br />
                        
                   </div>
                </div>
            </form>
        </div>
    </div>
      </div>
    </div>
  )
}



// import React,{Component} from 'react';
// import CSRFToken from './Csrftoken';

// import { useNavigate } from 'react-router-dom'
// const navigate = useNavigate();
// export default class LoginPage extends Component {
  
//   constructor(props){
//     super(props);
//     this.state = {
//       username:"",
//       password: "",
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.loginbuttonpressed = this.loginbuttonpressed.bind(this);
//   }
  
//   handleChange(event){
//     this.setState({[event.target.name]:event.target.value})
//   }  
//   loginbuttonpressed(event){
//     event.preventDefault()
//     // alert("wtygdsj");
//     alert(this.state.username);
//     // console.log('login button pressed');
//     // console.log(this.state.username);
//     // console.log('hello');
//     const requestOptions={
//       method:'POST',
//       headers:{'Content-Type':'application/json'},
//       body:JSON.stringify({
//           userName:this.state.username,
//           password:this.state.password

//       })
//     };
//     // // fetch('/api/login',requestOptions).then((response)=>response.json()).then((data)=>console.log(data));
//     fetch("api/login",requestOptions).then((Response)=>{
//       if(Response.ok){
//         alert('yahoo');
//         // navigate(`/user/${this.state.username}`);

//         // history.pushState(`/user/${this.state.username}`)
//       }
//       else{
//         alert('User not found')
//       }
//     }).catch((error)=>{
//       console.log("error aayo hai");
//       console.log(error);
//     });

//   }
//   render() {
//     return (
//       <div>
//         <h2>This is the login page. new login page again again</h2>
//         <div className="center">
//         <div className="login-form-container">
//             <div className="text">LOGIN</div>
//             <form action="#" method="post" id="formforlogin" onSubmit={this.loginbuttonpressed}>
//               <CSRFToken/>
              
//               {/* {% csrf_token %} 
//               {% load static %} */}
//                 <div className="input-data">
//                     <label htmlFor= "username">
//                       <b>User Name : </b>
//                     </label>
//                     <input
//                       value={this.state.username}
//                       onChange={this.handleChange}
//                       type="text"
//                       placeholder="Enter your user name"
//                       name="username"
//                       required
//                     />
//                 </div>
                
//                 <div className="input-data">
//                     <label htmlFor ="password">
//                       <b>Password : </b>
//                     </label>
//                     <input
//                       value={this.state.password}
//                       onChange={this.handleChange}
//                       type="password"
//                       placeholder="Enter your password"
//                       name="password"
//                       required
//                     />
//                 </div>
//                 <div className="notregister" href="#" title="Register here">
//                   <a href="/signup">Not registered yet? </a>
//                 </div>
                
//                 <div className="btn">
//                     <div className="insidebtn">
//                         <button type="submit" ><b>Login</b></button><br />
                        
//                    </div>
//                 </div>
//             </form>
//         </div>
//     </div>
//       </div>
//     )
//   }
// }