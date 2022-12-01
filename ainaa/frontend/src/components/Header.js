import React from 'react';

export default function Header(props) {
  const userLoginStatus=localStorage.getItem('userLoginStatus');
  const logoutclick=()=>{
    const Swal = require('sweetalert2')
    Swal.fire({
        title: 'Confirm?',
        text: 'Are you sure you want to logout?',
        icon: 'info',
        confirmButtonText: 'Continue',
        showCancelButton: true,

      }).then((result)=>{
        if(result.isConfirmed){
            // localStorage.removeItem('userLoginStatus')
            // localStorage.removeItem('loggeduser')
            Swal.fire('success','You have been logged out');
            localStorage.removeItem('userLoginStatus')
            localStorage.removeItem('loggeduser')
            window.location.href='/login'; 
        }
      })

  }
  
return (
  
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark` }>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><b><img
              src="https://i.im.ge/2022/10/03/1KXPIp.logo2.md.png"
              alt="Aaina"
              width= "200px"
              height= "100px"
      /></b></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Options
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  
                  {userLoginStatus!='true' &&
                  <><li><a className="dropdown-item" href="/login">Login</a></li>
                  <li><a className="dropdown-item" href="/signup">Signup</a></li>
                  </>
                }
                {userLoginStatus=='true' &&
                  <><li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                  <li><a className="dropdown-item"  onClick={logoutclick}>Logout</a></li></>
                }
                </ul>
              </li>
          
        </ul>
        </div>
           
          </div>
        </div>
      </nav>
    </div>
  )
}


