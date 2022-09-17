import React,{Component} from 'react';
import {render} from "react-dom";
import HomePage from './homepage';
// import LoginPage from './Login';
// import SignupPage from './Signup';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            
            <><h1>testing code  hello hello </h1> 
             <HomePage/>
             {/* <LoginPage/>
            <SignupPage/> */}
             
              </>
            
            
        
        )
    }
}
const appDiv=document.getElementById("app");
render(<App/>,appDiv)