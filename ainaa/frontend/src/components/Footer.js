import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';

<<<<<<< HEAD
function Footer(){
    return(
    <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
          
        </div>
    </footer>
    
    );
  }
  export default Footer;
=======
function Footer() {
  return (
    // <footer classNameName="text-muted">
    //     <div classNameName="container">
    //       <p classNameName="float-right">
    //         <a href="#">Back to top</a>
    //       </p>
    //       <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
    //       <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
    //     </div>
    // </footer>
    <>
      <h1>this is new footer</h1>
      <div className="row ">
      
      <h6 className="text-muted bold-text col-md-11 col-md-offset-1 col-md-4 mt-3 col-xl-1">
                    <b>Developers</b>
                  </h6>
            {/* <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   "> */}
                  <div className="col-md-11 col-md-offset-1 col-md-4 mt-3 col-sm-4 col-xl-2">
                <div className="container">
                <h6 className="text-muted bold-text">
                    <b>Shubhashish Karki</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    sk@gmail.com
                  </small>
                {/* </div> */}
                </div>
                </div>

                {/* <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   "> */}
                <div className="col-md-11 col-md-offset-1 col-md-4 mt-3 col-sm-4 col-xl-2">
                <div className="container">
                  <h6 className="text-muted bold-text">
                    <b>Sadikshya Pokharel</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    psaishya@gmail.com
                  </small>
                </div>
                </div>

                
                {/* <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   "> */}
                <div className="col-md-11 col-md-offset-1 col-md-4 mt-3 col-sm-4 col-xl-2">
                  <div className="container">
                    <h6 className="text-muted bold-text">
                    <b>Soniya Sharma</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    soneeyashrm@gmail.com
                  </small>
                </div>
                </div>

                
                {/* <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   "> */}
                <div className="col-md-11 col-md-offset-1 col-md-4 mt-3 col-sm-4 col-xl-2">
                  <div className="container">
                    <h6 className="text-muted bold-text">
                    <b>Janak Sitaula</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    js@gmail.com
                  </small>
                </div>
                </div>
                </div>

                <small className="rights">
                    <span>&#174;</span> Ainaa All Rights Reserved.
                  </small>
      {/* <div className="container-fluid pb-0 mb-0 justify-content-center text-dark ">
        <footer>
          <div className="row my-5 justify-content-center py-5">
            <div className="col-11">
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-12   my-auto mx-auto a">
                  <h3 className="text-muted mb-md-0 mb-5 bold-text">Pepper.</h3>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-5">
                  <h6 className="mb-3 mb-lg-4 bold-text ">
                    <b>MENU</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Portfolio</li>
                  </ul>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p className="mb-1">605, RATAN ICON BUILDING</p>
                  <p>SEAWOODS SECTOR</p>{" "}
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-auto  my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p className="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span className="mx-2">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>{" "}
                    <span className="mx-2">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    <span className="mx-2">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>{" "}
                    <span className="mx-2">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>{" "}
                  </p>
                  <small className="rights">
                    <span>&#174;</span> Pepper All Rights Reserved.
                  </small>
                </div>
                
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   ">
                  <h6 className="text-muted bold-text">
                    <b>RISHABH SHEKHAR</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    rishab@gmail.com
                  </small>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   ">
                  <h6 className="text-muted bold-text">
                    <b>RISHABH SHEKHAR</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    rishab@gmail.com
                  </small>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   ">
                  <h6 className="text-muted bold-text">
                    <b>RISHABH SHEKHAR</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    rishab@gmail.com
                  </small>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   ">
                  <h6 className="text-muted bold-text">
                    <b>RISHABH SHEKHAR</b>
                  </h6>
                  <small>
                    <span>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    rishab@gmail.com
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div> */}
    </>
  );
}
export default Footer;
>>>>>>> a75b90b2be57cd5898396668a805ab9e27a296aa
