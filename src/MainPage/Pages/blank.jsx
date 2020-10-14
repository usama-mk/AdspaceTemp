/**
 * Blank Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class Blank extends Component {
	render() {
		return (
			<div className="page-wrapper">
				<Helmet>
					<title>Ventura - Blank Page</title>
					<meta name="description" content="Login page"/>					
				</Helmet>
			<div className="content container-fluid">
			  {/* Page Header */}
			  <div className="page-header">
				<div className="row">
				  <div className="col-sm-12">
					<h3 className="page-title">Blank Page</h3>
					<ul className="breadcrumb">
					  <li className="breadcrumb-item"><a href="/app/index">Dashboard</a></li>
					  <li className="breadcrumb-item active">Blank Page</li>
					</ul>
				  </div>
				</div>
			  </div>
			  {/* /Page Header */}
			  <div className="row">
				<div className="col-sm-12">
				  Contents here
				</div>			
			  </div>
			</div>			
		  </div>
		);
	}
}
