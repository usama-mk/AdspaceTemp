import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import App from './initialpage/App';
 

import './assets/css/font-awesome.min.css';

import './assets/css/feathericon.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

// Custom Style File
import './assets/js/bootstrap.min.js';
import './assets/css/select2.min.css';

import './assets/js/popper.min.js';
import './assets/js/app.js';
import './assets/js/select2.min.js';
import './assets/js/jquery-3.2.1.min.js';
import './assets/js/jquery.slimscroll.min.js';
import './assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css';
import './assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js';
import './assets/plugins/jvectormap/jquery-jvectormap-world-mill.js';
import './assets/plugins/jvectormap/jquery-jvectormap-ru-mill.js';
import './assets/plugins/jvectormap/jquery-jvectormap-us-aea.js';
import './assets/plugins/jvectormap/jquery-jvectormap-uk_countries-mill.js';
import './assets/plugins/jvectormap/jquery-jvectormap-in-mill.js';
const hasTemp = localStorage.getItem('skin-color');
if(hasTemp === "orange"){
   require('./assets/css/style-orange.css') ;
}else if(hasTemp === "red"){
   require('./assets/css/style-red.css') ;
}else if(hasTemp === "teal"){
   require('./assets/css/style-teal.css') ;
}else{
   require('./assets/css/style-blue.css');
}

const MainApp = () => (
   <Router  >
      <Switch>
         <Route path="/" component={App} />
      </Switch>
	</Router>
);

export default MainApp;