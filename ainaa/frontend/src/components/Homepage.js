import React,{Component} from 'react';
import LoginPage from './Login';
import SignupPage from './Signup';
// import {BrowserRouter as Router,Routes,Route,Link,Redirect, }from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default class HomePage extends Component {
  
  constructor(props){
    super(props);
  }  
  render() {
    return (
        <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<p>This is the ywuijfjioj homepage hugdgnjj vbhskoao t </p>} />
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
            </Routes>
        </Router>


        {/* <p>hello how are you</p> */}
    {/* //   <div>
     <LoginPage/>
    <SignupPage/>
    </div> */}
    </div>
    )
  }
}
