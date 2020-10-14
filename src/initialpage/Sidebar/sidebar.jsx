/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
   
    let pathname = window.location.pathname

    return (
      <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title"> 
              <span>Main</span>
            </li>
            <li className={pathname.includes('index') ?"active" :""}> 
              <a href="/app/index"><i className="fe fe-home" /> <span>Dashboard</span></a>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-cart" /> <span> Media Planning</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
              <li><a className={pathname.includes('products') ?"active" :""} href="/app/ecommerce/billboards">Billboards</a></li>
                <li><a className={pathname.includes('products') ?"active" :""} href="/app/ecommerce/products">Products</a></li>
                <li><a className={pathname.includes('uct-details') ?"active" :""} href="/app/ecommerce/product-details">Product View</a></li>
                <li><a className={pathname.includes('orders') ?"active" :""} href="/app/ecommerce/orders">Orders</a></li>
                <li><a className={pathname.includes('customers') ?"active" :""} href="/app/ecommerce/customers">Customers</a></li>
                <li><a className={pathname.includes('invoice') ?"active" :""} href="/app/ecommerce/invoice">Invoice</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-tiled" /> <span> Branding </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('chat') ?"active" :""} href="/app/application/chat">Chat</a></li>
                <li><a className={pathname.includes('calendar') ?"active" :""} href="/app/application/calendar">Calendar</a></li>
                <li><a className={pathname.includes('inbox') ||pathname.includes('compose')||
                      pathname.includes('mail-view') ?"active" :""} href="/app/application/inbox">Email</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-tiled" /> <span> AdMonitoring </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('chat') ?"active" :""} href="/app/application/chat">Chat</a></li>
                <li><a className={pathname.includes('calendar') ?"active" :""} href="/app/application/calendar">Calendar</a></li>
                <li><a className={pathname.includes('inbox') ||pathname.includes('compose')||
                      pathname.includes('mail-view') ?"active" :""} href="/app/application/inbox">Email</a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-tiled" /> <span> Orders </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('chat') ?"active" :""} href="/app/application/chat">Chat</a></li>
                <li><a className={pathname.includes('calendar') ?"active" :""} href="/app/application/calendar">Calendar</a></li>
                <li><a className={pathname.includes('inbox') ||pathname.includes('compose')||
                      pathname.includes('mail-view') ?"active" :""} href="/app/application/inbox">Email</a></li>
              </ul>
            </li>
            <li className="menu-title"> 
              <span>Pages</span>
            </li>
            <li className={pathname.includes('profile') ?"active" :""}> 
              <a href="/app/profile"><i className="fe fe-user-plus" /> <span>Profile</span></a>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-document" /> <span> Authentication </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a href="/login"> Login </a></li>
                <li><a href="/register"> Register </a></li>
                <li><a href="/forgot-password"> Forgot Password </a></li>
                <li><a href="/lock-screen"> Lock Screen </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-warning" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a href="/error-404">404 Error </a></li>
                <li><a href="/error-500">500 Error </a></li>
              </ul>
            </li>
            <li className={pathname.includes('users') ?"active" :""}> 
              <a href="/app/users"><i className="fe fe-users" /> <span>Users</span></a>
            </li>
            <li className={pathname.includes('blank-page') ?"active" :""}> 
              <a href="/app/blank-page"><i className="fe fe-file" /> <span>Blank Page</span></a>
            </li>
            <li className={pathname.includes('maps-vector') ?"active" :""}> 
              <a href="/app/maps-vector"><i className="fe fe-map" /> <span>Vector Maps</span></a>
            </li>
            <li className="menu-title"> 
              <span>UI Interface</span>
            </li>
            <li className={pathname.includes('components') ?"active" :""}> 
              <a href="/app/components"><i className="fe fe-vector" /> <span>Components</span></a>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-layout" /> <span> Forms </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('form-basic-inputs') ?"active" :""} href="/app/form-basic-inputs">Basic Inputs </a></li>
                <li><a className={pathname.includes('form-input-groups') ?"active" :""} href="/app/form-input-groups">Input Groups </a></li>
                <li><a className={pathname.includes('form-horizontal') ?"active" :""} href="/app/form-horizontal">Horizontal Form </a></li>
                <li><a className={pathname.includes('form-vertical') ?"active" :""} href="/app/form-vertical"> Vertical Form </a></li>
                <li><a className={pathname.includes('form-mask') ?"active" :""} href="/app/form-mask"> Form Mask </a></li>
                <li><a className={pathname.includes('form-validation') ?"active" :""} href="/app/form-validation"> Form Validation </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#"><i className="fe fe-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a className={pathname.includes('tables-basic') ?"active" :""} href="/app/tables-basic">Basic Tables </a></li>
                <li><a className={pathname.includes('data-tables') ?"active" :""} href="/app/data-tables">Data Table </a></li>
              </ul>
            </li>
            <li className="submenu">
              <a href=""><i className="fe fe-code" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li className="submenu">
                  <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
                  <ul style={{display: 'none'}}>
                    <li><a href=""><span>Level 2</span></a></li>
                    <li className="submenu">
                      <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                      <ul style={{display: 'none'}}>
                        <li><a href="">Level 3</a></li>
                        <li><a href="">Level 3</a></li>
                      </ul>
                    </li>
                    <li><a href=""> <span>Level 2</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href=""> <span>Level 1</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
      );
   }
}

export default Sidebar;
