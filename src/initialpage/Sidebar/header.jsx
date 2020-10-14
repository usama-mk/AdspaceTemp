/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {headerlogo,Logo_small,Avatar_01,Avatar_02,Avatar_11,Avatar_13,Avatar_17} from '../../imagepath'

class Header extends Component {

   render() {
    const {  location } = this.props
    let pathname = location.pathname
    
      return (        
        <div className="header">
        {/* Logo */}
        <div className="header-left">
          <a href="/app/index" className="logo">
            <img  src={headerlogo} alt="Logo" width={143.41} height={40} />
          </a>
          <a href="/app/index" className="logo logo-small">
            <img src={Logo_small} alt="Logo" width={30} height={30} />
          </a>
        </div>
        {/* /Logo */}
        <a href="" id="toggle_btn">
          <i className="fe fe-text-align-left" />
        </a>
        <div className="top-nav-search">
          <form>
            <input type="text" className="form-control" placeholder="Search here" />
            <button className="btn" type="submit"><i className="fa fa-search" /></button>
          </form>
        </div>
        {/* Mobile Menu Toggle */}
        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars" />
        </a>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          {/* App Lists */}
          <li className="nav-item dropdown app-dropdown">
            <a className="nav-link dropdown-toggle" aria-expanded="false" role="button" data-toggle="dropdown" href="#"><i className="fe fe-app-menu" /></a>
            <ul className="dropdown-menu app-dropdown-menu">
              <li>
                <div className="app-list">
                  <div className="row">
                    <div className="col"><a className={pathname.includes('inbox') ?"app-item active" :"app-item"} href="/app/application/inbox"><i className="fa fa-envelope" /><span>Email</span></a></div>
                    <div className="col"><a className={pathname.includes('calendar') ?"app-item active" :"app-item"} href="/app/application/calendar"><i className="fa fa-calendar" /><span>Calendar</span></a></div>
                    <div className="col"><a className={pathname.includes('chat') ?"app-item active" :"app-item"} href="/app/application/chat"><i className="fa fa-comments" /><span>Chat</span></a></div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          {/* /App Lists */}
          {/* Notifications */}
          <li className="nav-item dropdown noti-dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" alt="User Image" src={Avatar_02} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span></p>
                          <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" alt="User Image" src={Avatar_11} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">International Software Inc</span> has sent you a invoice in the amount of <span className="noti-title">$218</span></p>
                          <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" alt="User Image" src={Avatar_17} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title">Apple iPhone XR</span></p>
                          <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" alt="User Image" src={Avatar_13} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Mercury Software Inc</span> added a new product <span className="noti-title">Apple MacBook Pro</span></p>
                          <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <span className="user-img"><img className="rounded-circle" src={Avatar_01} width={31} alt="Ryan Taylor" /></span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img src={Avatar_01} alt="User Image" className="avatar-img rounded-circle" />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="/app/profile">My Profile</a>
              <a className="dropdown-item" href="/app/profile">Account Settings</a>
              <a className="dropdown-item" href="/login">Logout</a>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Right Menu */}
      </div>
      );
   }
}

export default withRouter(Header);