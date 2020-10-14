/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import {headerlogo,Avatar_02} from '../../../imagepath'
import { Helmet } from "react-helmet";

class Lockscreen extends Component {

   render() {     
      return (
      <div className="main-wrapper login-body">
      <Helmet>
         <title>Ventura - Lock Screen</title>
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
                <div className="lock-user">
                  <img className="rounded-circle" src={Avatar_02} alt="User Image" />
                  <h4>Allen Davis</h4>
                </div>
                {/* Form */}
                <form action="/react/template/app/index">
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Password" />
                  </div>
                  <div className="form-group mb-0">
                    <button className="btn btn-primary btn-block" type="submit">Enter</button>
                  </div>
                </form>
                {/* /Form */}
                <div className="text-center dont-have">Sign in as a different user? <a href="/react/template/login">Login</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
   }
}

export default Lockscreen;
