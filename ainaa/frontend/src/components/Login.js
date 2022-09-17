import React,{Component} from 'react';

export default class LoginPage extends Component {
  
  constructor(props){
    super(props);
  }  
  render() {
    return (
      <div>
        <h2>This is the login page.</h2>
        <div class="center">
        <div class="login-form-container">
            <div class="text">LOGIN</div>
            <form action="#" method="post" id="formforlogin">
            {/* <CSRFToken/> */}
              {/* {% csrf_token %} 
              {% load static %} */}
                <div class="input-data">
                  <label for="email"><b>UserEmail : </b></label>
                  <input type="email" placeholder="Enter email" name="email"  required/><br />
                    
                </div>
                
                <div class="input-data">
                  <label for="password"><b>Password : </b></label>
                  <input type="password" placeholder="Enter Password" name="password"  required/><br />
                 
                </div>
                
                <div class="notregister" href="#" title="Register here">
                  <a href="/signup">Not registered yet? </a>
                </div>
                
                <div class="btn">
                    <div class="insidebtn">
                        <button type="submit"><b>Login</b></button><br />
                        
                   </div>
                </div>
            </form>
        </div>
    </div>
      </div>
    )
  }
}
