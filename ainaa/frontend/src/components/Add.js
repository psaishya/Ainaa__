import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
import CSRFToken from './Csrftoken';
// import {useNavigate} from 'react-router-dom';
export default class AddTask extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      title: "",
      description: "",
      //complete: false,
    
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
   
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  handleSubmit(event){
    const{title,description,complete}=this.state
    event.preventDefault()
    alert(` Your details
    Title:${title}
    Description:${description}
  
    `)
    console.log('hello');

    const requestOptions={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            title:this.state.title,
            description:this.state.description,
            //complete:this.state.complete,
        })
    };
    // const navigate = useNavigate();
    fetch('/api/create-task',requestOptions).then((response)=>response.json()).then((data)=>console.log(data));
    console.log('hello');
     
  }
  
  render() {
    return (
      <div>
        <h2>AddTask.</h2>
        <div>
          <center>
            <h1>task </h1>
          </center>
          <form action="#" method="post" onSubmit={this.handleSubmit}>
            <CSRFToken/>
            {/* {% csrf_token %}
            {% load static %} */}
            <center>
              <div class="container">
                <label htmlfor="title">
                  <b>title: </b>
                </label>
                <input
                  value={this.state.title}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Enter the task"
                  name="title"
                  required
                />
                <br />
                <label htmlfor="Description">
                  <b>Description :</b>
                </label>
                <input
                  value={this.state.description}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Describe your task"
                  name="description"
                  required
                />
                {/* <br />
                <label htmlfor="Complete">
                  <b>Complete : </b>
                </label>
                <input type="checkbox" value={false} onClick={true} name="Complete" />

                <br /> */}
                <button type="submit" >
                  <b>Add</b>
                </button>
                <br />
              </div>
            </center>
          </form>
        </div>
      </div>
    );
  }
}