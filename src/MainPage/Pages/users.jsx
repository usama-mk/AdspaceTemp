
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import {Avatar_03,Avatar_04,Avatar_05,Avatar_06,Avatar_07,Avatar_08} from '../../imagepath';

class Users extends Component {
   render() {
      return ( 
        <div className="page-wrapper">
        <Helmet>
            <title>Ventura - Users</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Users</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/react/template/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Users</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-header">
                  <h4 className="card-title">List of Users</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Products</th>
                          <th>Total Sales</th>
                          <th>Created at</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/react/template/app/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Avatar_03} alt="User Image" /></a>
                              <a href="/react/template/app/profile">Justin Lee <span>#0001</span></a>
                            </h2>
                          </td>
                          <td>76</td>
                          <td>$18715</td>
                          <td>1 Jan 2019</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="#" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/react/template/app/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Avatar_04} alt="User Image" /></a>
                              <a href="/react/template/app/profile">Joe Edwards <span>#0002</span></a>
                            </h2>
                          </td>
                          <td>42</td>
                          <td>$9514</td>
                          <td>22 Jan 2019</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="#" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/react/template/app/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Avatar_05} alt="User Image" /></a>
                              <a href="/react/template/app/profile">Mary Wiley <span>#0003</span></a>
                            </h2>
                          </td>
                          <td>21</td>
                          <td>$1845</td>
                          <td>3 Feb 2019</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="#" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/react/template/app/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Avatar_06} alt="User Image" /></a>
                              <a href="/react/template/app/profile">Amy Bond <span>#0004</span></a>
                            </h2>
                          </td>
                          <td>112</td>
                          <td>$10915</td>
                          <td>17 Feb 2019</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="#" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/react/template/app/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Avatar_07} alt="User Image" /></a>
                              <a href="/react/template/app/profile">Clara Brady <span>#0005</span></a>
                            </h2>
                          </td>
                          <td>271</td>
                          <td>$15045</td>
                          <td>19 Mar 2019</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="#" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/react/template/app/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Avatar_08} alt="User Image" /></a>
                              <a href="/react/template/app/profile">Robert Martin <span>#0006</span></a>
                            </h2>
                          </td>
                          <td>997</td>
                          <td>$18420</td>
                          <td>1 Apr 2019</td>
                          <td className="text-right">
                            <div className="actions">
                              <a href="#" className="btn btn-sm bg-success-light mr-2">
                                <i className="fe fe-pencil" /> Edit
                              </a>
                              <a href="#" className="btn btn-sm bg-danger-light">
                                <i className="fe fe-trash" /> Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>					
          </div>					
        </div>			
      </div>
      );
   }
}

export default Users;