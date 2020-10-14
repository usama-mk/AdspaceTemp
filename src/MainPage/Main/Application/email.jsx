
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Email extends Component {
   render() {
      return ( 
        <div className="page-wrapper">
        <Helmet>
           <title>Ventura - Inbox</title>
           <meta name="description" content="Customers"/>					
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Inbox</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Inbox</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="compose-btn">
                <a href="/app/application/compose" className="btn btn-primary btn-block">
                  Compose
                </a>
              </div>
              <ul className="inbox-menu">
                <li className="active">
                  <a href="#"><i className="fa fa-download" /> Inbox <span className="mail-count">(5)</span></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-star-o" /> Important</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-paper-plane-o" /> Sent Mail</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-file-text-o" /> Drafts <span className="mail-count">(13)</span></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-trash-o" /> Trash</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="card">
                <div className="card-body">
                  <div className="email-header">
                    <div className="row">
                      <div className="col top-action-left">
                        <div className="float-left">
                          <div className="btn-group dropdown-action">
                            <button type="button" className="btn btn-white dropdown-toggle mr-1" data-toggle="dropdown">Select <i className="fa fa-angle-down " /></button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">All</a>
                              <a className="dropdown-item" href="#">None</a>
                              <div className="dropdown-divider" /> 
                              <a className="dropdown-item" href="#">Read</a>
                              <a className="dropdown-item" href="#">Unread</a>
                            </div>
                          </div>
                          <div className="btn-group dropdown-action">
                            <button type="button" className="btn btn-white dropdown-toggle mr-1" data-toggle="dropdown">Actions <i className="fa fa-angle-down " /></button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Reply</a>
                              <a className="dropdown-item" href="#">Forward</a>
                              <a className="dropdown-item" href="#">Archive</a>
                              <div className="dropdown-divider" /> 
                              <a className="dropdown-item" href="#">Mark As Read</a>
                              <a className="dropdown-item" href="#">Mark As Unread</a>
                              <div className="dropdown-divider" /> 
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                          <div className="btn-group dropdown-action">
                            <button type="button" className="btn btn-white dropdown-toggle mr-1" data-toggle="dropdown"><i className="fa fa-folder" /> <i className="fa fa-angle-down" /></button>
                            <div role="menu" className="dropdown-menu">
                              <a className="dropdown-item" href="#">Social</a>
                              <a className="dropdown-item" href="#">Forums</a>
                              <a className="dropdown-item" href="#">Updates</a>
                              <div className="dropdown-divider" /> 
                              <a className="dropdown-item" href="#">Spam</a>
                              <a className="dropdown-item" href="#">Trash</a>
                              <div className="dropdown-divider" /> 
                              <a className="dropdown-item" href="#">New</a>
                            </div>
                          </div>
                          <div className="btn-group dropdown-action">
                            <button type="button" data-toggle="dropdown" className="btn btn-white dropdown-toggle mr-1"><i className="fa fa-tags" /> <i className="fa fa-angle-down" /></button>
                            <div role="menu" className="dropdown-menu">
                              <a className="dropdown-item" href="#">Work</a>
                              <a className="dropdown-item" href="#">Family</a>
                              <a className="dropdown-item" href="#">Social</a>
                              <div className="dropdown-divider" /> 
                              <a className="dropdown-item" href="#">Primary</a>
                              <a className="dropdown-item" href="#">Promotions</a>
                              <a className="dropdown-item" href="#">Forums</a>
                            </div>
                          </div>
                          <div className="btn-group dropdown-action mail-search">
                            <input type="text" placeholder="Search Messages" className="form-control search-message" />
                          </div>
                        </div>
                      </div>
                      <div className="col-auto top-action-right">
                        <div className="text-right">
                          <button type="button" title="Refresh" data-toggle="tooltip" className="btn btn-white d-none d-md-inline-block mr-1"><i className="fa fa-refresh" /></button>
                          <div className="btn-group">
                            <a className="btn btn-white mr-1"><i className="fa fa-angle-left" /></a>
                            <a className="btn btn-white"><i className="fa fa-angle-right" /></a>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-muted d-none d-md-inline-block">Showing 10 of 112 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="email-content">
                    <div className="table-responsive">
                      <table className="table table-inbox table-hover">
                        <thead>
                          <tr>
                            <th colSpan={6}>
                              <input type="checkbox" className="checkbox-all" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="unread clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star starred" /></span></td>
                            <td className="name">John Doe</td>
                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                            <td><i className="fa fa-paperclip" /></td>
                            <td className="mail-date">13:14</td>
                          </tr>
                          <tr className="unread clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">Envato Account</td>
                            <td className="subject">Important account security update from Envato</td>
                            <td />
                            <td className="mail-date">8:42</td>
                          </tr>
                          <tr className="clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">Twitter</td>
                            <td className="subject">HRMS Bootstrap Admin Template</td>
                            <td />
                            <td className="mail-date">30 Nov</td>
                          </tr>
                          <tr className="unread clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">Richard Parker</td>
                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                            <td />
                            <td className="mail-date">18 Sep</td>
                          </tr>
                          <tr className="clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">John Smith</td>
                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                            <td />
                            <td className="mail-date">21 Aug</td>
                          </tr>
                          <tr className="clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">me, Robert Smith (3)</td>
                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                            <td />
                            <td className="mail-date">1 Aug</td>
                          </tr>
                          <tr className="unread clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">Codecanyon</td>
                            <td className="subject">Welcome To Codecanyon</td>
                            <td />
                            <td className="mail-date">Jul 13</td>
                          </tr>
                          <tr className="clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">Richard Miles</td>
                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                            <td><i className="fa fa-paperclip" /></td>
                            <td className="mail-date">May 14</td>
                          </tr>
                          <tr className="unread clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star-o" /></span></td>
                            <td className="name">John Smith</td>
                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                            <td />
                            <td className="mail-date">11/11/16</td>
                          </tr>
                          <tr className="clickable-row" data-href="/app/application/mail-view">
                            <td>
                              <input type="checkbox" className="checkmail" />
                            </td>
                            <td><span className="mail-important"><i className="fa fa-star starred" /></span></td>
                            <td className="name">Mike Litorus</td>
                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                            <td />
                            <td className="mail-date">10/31/16</td>
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
      </div>
      );
   }
}

export default Email;