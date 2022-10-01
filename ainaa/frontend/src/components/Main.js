 import React from 'react'
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
// import { useParams } from 'react-router-dom'
// import { useState } from 'react';
// export default function Main() {
    
//     const[firstname,setFirstname] = useState("");
//     const[lastname,setLastname] = useState("");
//     const[gender,setGender] = useState("");
//     const[email,setEmail] = useState("");
//     const[username,setUsername] = useState("");
//     const[password,setPassword] = useState("");
//     let {usern}=useParams();
//     function getUserDetails(){
//       fetch('/api/get-user'+'?userName='+usern).then((Response)=>Response.json()).then((data)=>{
//         setFirstname(data.firstName),
//         setLastname(data.lastName),
//         setGender(data.gender),
//         setEmail(data.email),
//         setUsername(data.userName),
//         setPassword(data.password)
//       });
//     }
//   return (
//     <div>
//       <div>
//       <h1>this is of user {usern}</h1>
//       <p>inside main hello now please work</p>
//       <p>FirstName:{firstname}</p>
//         <p>LastName:{lastname}</p>
//         <p>Gender:{gender}</p>
//         <p>Email:{email}</p>
//         <p>UserName:{username}</p>
//         <p>Password:{password}</p>
//         {getUserDetails()}
//     </div>
//     </div>
//   )
// }

import Home from './Home';
import Header from './Header';
import Footer from './footer';
import LoginPage from './Login';
import SignupPage from './Signup';

function Main(){
  return(
    <div className="App">
      <Header/>
      <Router>
            <Routes>
                {/* <Route exact path='/' element={<Main/>} />
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/home/:username' element={<Mainscreen/>}/>
                <Route path="/test2" element={<Test2/>}/>
                <Route path="/test/:username" element={<Test/>}/>
                <Route path='/main/:usern' element={<Main/>}/>
                <Route path='/task/:idn' element={<Task/>}/>
                <Route path='/create-task' element={<AddTask/>}/> */}
                <Route path='/' element={<Home/>}/>
                <Route path='/login'element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>

            </Routes>
        </Router>
      <Footer/>
    </div>
  );
}
export default Main;