import React from 'react';

export default function Header(props) {
  const userLoginStatus=localStorage.getItem('userLoginStatus');
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
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
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
                  <li><a className="dropdown-item" href="/logout">Logout</a></li></>
                }
                </ul>
              </li>
            {/* <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
            </li> */}
        
        </ul>
        </div>
            
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'}`} type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-light`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changemode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


