
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {headerlogo} from '../../../imagepath'

class Register extends Component {
   render() {
      return ( 
        <div className="main-wrapper login-body">
        <Helmet>
           <title>Ventura - Register</title>
           <meta name="description" content="Customers"/>					
        </Helmet>
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={headerlogo} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form action="/react/template/login">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Confirm Password" />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-primary btn-block" type="submit">Register</button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Register with</span>
                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a><a href="#" className="google"><i className="fa fa-google" /></a>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">Already have an account? <a href="/react/template/login">Login</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       );
   }
}

export default Register;
