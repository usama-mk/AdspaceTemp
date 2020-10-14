
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import $ from 'jquery';

class MapsVectorPage extends Component {
  componentDidMount(){
    $('#world_map').vectorMap({
      map: 'world_mill',
      scaleColors : ['#03a9f4', '#03a9f4'],
      normalizeFunction : 'polynomial',
      hoverOpacity : 0.7,
      hoverColor : false,
      regionStyle : {
        initial : {
          fill : '#2962ff'
        }
      },
      backgroundColor : 'transparent'
    });
    
    $('#usa').vectorMap({
      map: 'us_aea',
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: '#2962ff'
        }
      }
    });
    $('#india').vectorMap({
      map : 'in_mill',
      backgroundColor : 'transparent',
      regionStyle : {
        initial : {
          fill : '#2962ff'
        }
      }
    });
    $('#uk').vectorMap({map: 'uk_countries_mill',backgroundColor: 'transparent',
          regionStyle: {
          initial: {
            fill: '#2962ff'
          }
          }});
    $('#russia').vectorMap({
      map: 'ru_mill',
      backgroundColor: 'transparent',
          regionStyle: {
          initial: {
            fill: '#2962ff'
          }
          }});
  }
   render() {
      return ( 
        <div className="page-wrapper">
        <Helmet>
            <title>Ventura - Vector Maps</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Vector Maps</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Vector Maps</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* World Map */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">World Map</h4>
                </div>
                <div className="card-body">
                  <div id="world_map" style={{height: '400px'}} />
                </div>
              </div>
            </div>
          </div>
          {/* /World Map */}
          <div className="row">
            <div className="col-lg-6">
              {/* USA Map */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">USA Map</h4>
                </div>
                <div className="card-body">
                  <div id="usa" style={{height: '400px'}} />
                </div>
              </div>
              {/* /USA Map */}
            </div>
            <div className="col-lg-6">
              {/* UK Map */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">UK Map</h4>
                </div>
                <div className="card-body">
                  <div id="uk" style={{height: '400px'}} />
                </div>
              </div>
              {/* /UK Map */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              {/* India Map */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">India Map</h4>
                </div>
                <div className="card-body">
                  <div id="india" style={{height: '400px'}} />
                </div>
              </div>
              {/* /India Map */}
            </div>
            <div className="col-lg-6">
              {/* Russia Map */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Russia Map</h4>
                </div>
                <div className="card-body">
                  <div id="russia" style={{height: '400px'}} />
                </div>
              </div>
              {/* /Russia Map */}
            </div>
          </div>
        </div>			
      </div>
      );
   }
}

export default MapsVectorPage;