
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {headerlogo} from '../../../imagepath'

class Login extends Component {
   render() {
      return ( 
        <div className="main-wrapper login-body">
        <Helmet>
           <title>Ventura - Login</title>
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
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form action="/react/template/app/index">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center forgotpass"><a href="/react/template/forgot-password">Forgot Password?</a></div>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Login with</span>
                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a><a href="#" className="google"><i className="fa fa-google" /></a>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">Don’t have an account? <a href="/react/template/register">Register</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default Login;
