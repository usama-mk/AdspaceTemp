/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { AreaChart,ResponsiveContainer, Area,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "../index.css"

const areachartdata = [
  { y: '2013', "Sales": 60, "Profit": 80 },
  { y: '2014', "Sales": 100, "Profit": 120 },
  { y: '2015', "Sales": 240, "Profit": 120 },
  { y: '2016', "Sales": 120, "Profit": 140 },
  { y: '2017', "Sales": 80, "Profit": 100 },
  { y: '2018', "Sales": 100, "Profit": 120 },
  { y: '2019', "Sales": 60, "Profit": 80 },
];
const linechartdata = [
  { y: '2015', "Products": 100, "Sales": 30, "Customers":50 },
  { y: '2016', "Products": 20,  "Sales": 60,  "Customers":100 },
  { y: '2017', "Products": 90,  "Sales": 120, "Customers":50 },
  { y: '2018', "Products": 50,  "Sales": 80,  "Customers":100 },
  { y: '2019', "Products": 120,  "Sales": 150,  "Customers":50 }
];

class AdminDashboard extends Component {
  UNSAFE_componentWillMount (){
    let firstload = localStorage.getItem("firstload")
    if(firstload === "true"){
        setTimeout(function() {
          window.location.reload(1)
          localStorage.removeItem("firstload")
        },1000)
    }
  }

   render() {
      return (
        <div className="page-wrapper">
        <Helmet>
            <title>Ventura - Dashboard</title>
            <meta name="description" content="Dashboard"/>					
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Welcome Admin!</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-primary">
                      <i className="fe fe-users" />
                    </span>
                    <div className="dash-count">
                      <i className="fa fa-arrow-up text-success" /> 17%
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h3>168</h3>
                    <h6 className="text-muted">Customers</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-success">
                      <i className="fe fe-money" />
                    </span>
                    <div className="dash-count">
                      <i className="fa fa-arrow-down text-danger" /> 12%
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h3>21587</h3>
                    <h6 className="text-muted">Products</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-success w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-danger">
                      <i className="fe fe-credit-card" />
                    </span>
                    <div className="dash-count">
                      <i className="fa fa-arrow-down text-danger" /> 12%
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h3>$56485</h3>
                    <h6 className="text-muted">Sales</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-danger w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-warning">
                      <i className="fe fe-folder" />
                    </span>
                    <div className="dash-count">
                      <i className="fa fa-arrow-up text-success" /> 17%
                    </div>
                  </div>
                  <div className="dash-widget-info">
                    <h3>$62523</h3>
                    <h6 className="text-muted">Revenue</h6>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-warning w-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              {/* Sales Chart */}
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Sales Overview</h4>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width='100%' height={342}>
                  <AreaChart data={areachartdata}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }} >
                    <CartesianGrid/>
                    <XAxis dataKey="y" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Sales" stroke="#2962ff" fill="#2962ff" width={0} fillOpacity={0.5} dot={{r : 3}} activeDot={{ r: 7 }} />
                    <Area type="monotone" dataKey="Profit" stroke="#bbb" fill="#bbb" width={0} fillOpacity={0.5} dot={{r : 3}} activeDot={{ r: 7 }} />
                  </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {/* /Sales Chart */}
            </div>
            <div className="col-md-12 col-lg-6">
              {/* Invoice Chart */}
              <div className="card card-chart">
                <div className="card-header">
                  <h4 className="card-title">Order Status</h4>
                </div>
                <div className="card-body">
                  <ResponsiveContainer width='100%' height={342}>
                <LineChart data={linechartdata}
                    margin={{top: 5, right: 5, left: 5, bottom: 5 }} >
                  <CartesianGrid  />
                  <XAxis dataKey="y" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Products" stroke="#f90a48" fill="#f90a48" strokeWidth={1} dot={{r : 3}} activeDot={{ r: 7 }} />
                  <Line type="monotone" dataKey="Sales" stroke="#2962ff" fill="#2962ff" strokeWidth={1} dot={{r : 3}} activeDot={{ r: 7 }} />
                  <Line type="monotone" dataKey="Customers" stroke="#ccc" fill="#ccc" strokeWidth={1} dot={{r : 3}} activeDot={{ r: 7 }} />
                </LineChart>
                </ResponsiveContainer>
                </div>
              </div>
              {/* /Invoice Chart */}
            </div>	
          </div>
          <div className="row">
            <div className="col-md-6 d-flex">
              {/* Recent Orders */}
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h4 className="card-title">Recent Orders</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center">
                      <thead>
                        <tr>
                          <th>Item</th>
                          <th>Date</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-center">Status</th>
                          <th className="text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-nowrap">
                            <div className="font-weight-600">Apple Watch Series 4</div>
                          </td>
                          <td className="text-nowrap">19 Jan 2019</td>
                          <td className="text-center">5</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Completed</span>
                          </td>
                          <td className="text-right">
                            <div className="font-weight-600">$487</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <div className="font-weight-600">Apple iPhone XR</div>
                          </td>
                          <td className="text-nowrap">20 Jan 2019</td>
                          <td className="text-center">2</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Completed</span>
                          </td>
                          <td className="text-right">
                            <div className="font-weight-600">$255</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <div className="font-weight-600">Dell XPS 9370</div>
                          </td>
                          <td className="text-nowrap">21 Jan 2019</td>
                          <td className="text-center">1</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-warning inv-badge">Pending</span>
                          </td>
                          <td className="text-right">
                            <div className="font-weight-600">$799</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <div className="font-weight-600">Cisco WS-C2960X-48FPS-L</div>
                          </td>
                          <td className="text-nowrap">22 Jan 2019</td>
                          <td className="text-center">1</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-success inv-badge">Completed</span>
                          </td>
                          <td className="text-right">
                            <div className="font-weight-600">$970</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-nowrap">
                            <div className="font-weight-600">Apple MacBook Pro</div>
                          </td>
                          <td className="text-nowrap">23 Jan 2019</td>
                          <td className="text-center">1</td>
                          <td className="text-center">
                            <span className="badge badge-pill bg-danger inv-badge">Cancel</span>
                          </td>
                          <td className="text-right">
                            <div className="font-weight-600">$400</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* /Recent Orders */}
            </div>
            <div className="col-md-6 d-flex">
              {/* Feed Activity */}
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title">Feed Activity</h4>
                </div>
                <div className="card-body">
                  <ul className="activity-feed">
                    <li className="feed-item">
                      <div className="feed-date">Apr 13</div>
                      <span className="feed-text"><a href="/react/template/app/profile">John Doe</a> added new product <a href="/react/template/app/ecommerce/product-details">"Smart Watch"</a></span>
                    </li>
                    <li className="feed-item">
                      <div className="feed-date">Mar 21</div>
                      <span className="feed-text"><a href="/react/template/app/profile">Justin Lee</a> requested amount of <a href="/react/template/app/ecommerce/invoice">$5,781</a></span>
                    </li>
                    <li className="feed-item">
                      <div className="feed-date">Feb 2</div>
                      <span className="feed-text">New user registered <a href="/react/template/app/profile">"Mary Wiley"</a></span>
                    </li>
                    <li className="feed-item">
                      <div className="feed-date">Jan 27</div>
                      <span className="feed-text"><a href="/react/template/app/profile">Robert Martin</a> gave a review for <a href="/react/template/app/ecommerce/product-details">"Dell Laptop"</a></span>
                    </li>
                    <li className="feed-item">
                      <div className="feed-date">Jan 14</div>
                      <span className="feed-text">New customer registered <a href="/react/template/app/profile">"Tori Carter"</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Feed Activity */}
            </div>
          </div>
        </div>			
      </div>
        );
   }
}

export default withRouter(AdminDashboard);
