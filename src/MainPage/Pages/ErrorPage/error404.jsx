/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Error404 extends Component {

    render() {
     
      return (
         <div className="main-wrapper">
            <Helmet>
                <title>Ventura - Error 404</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
            <div className="error-box">
               <h1>404</h1>
               <h3 className="h2 mb-3"><i className="fa fa-warning" /> Oops! Page not found!</h3>
               <p className="h4 font-weight-normal">The page you requested was not found.</p>
               <a href="/app/index" className="btn btn-primary">Back to Home</a>
            </div>
       </div>
        
      );
   }
}

export default Error404;
