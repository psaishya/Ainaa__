import React,{Component} from 'react';
import LoginPage from './Login';
import SignupPage from './Signup';
import Mainscreen from './Home';
// import {BrowserRouter as Router,Routes,Route,Link,Redirect, }from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Test2 from './Test2';
import Test from './Test';
import { Home } from '@material-ui/icons';
import Main from './Main';


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
                <Route path='/home/:username' element={<Mainscreen/>}/>
                <Route path="/test2" element={<Test2/>}/>
                <Route path="/test/:username" element={<Test/>}/>
                <Route path='/main/:usern' element={<Main/>}/>


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
