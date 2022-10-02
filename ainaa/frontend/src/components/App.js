import React,{Component} from 'react';
import {render} from "react-dom";
import Main from './Main';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    render(){  
        return (
            
            <>
             <Main/>
            
             
              </>
            
            
        
        )
    }
}
const appDiv=document.getElementById("app");
render(<App/>,appDiv)