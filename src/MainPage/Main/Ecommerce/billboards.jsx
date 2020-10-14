
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import './billboards.css'
import { Product_01, Product_02, Product_03, Product_04, Product_05, Product_06, Product_07, Product_08 } from '../../../imagepath';

class Billboards extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Helmet>
          <title>Adspace - Billboards</title>
          <meta name="description" content="Dashboard" />
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Billboards</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Billboards</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row billcard">

            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_01} />


                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Click to see details</a>
                    {/* <a href="#" className="btn btn-info proedit-btn">Edit</a> */}
                  </div>

                  <div className="pro-desc">
                    <h5 ><a style={{ color: "blue" }} href="/app/ecommerce/product-details">Abba-AAlong Factory Road FTF Main Park Abba</a></h5>

                    <h5>Billboard</h5>
                    <h5>Available Quantity: 2</h5>
                    <h5>Traffic: 0</h5>
                    <h5>Size:5M(H)X16M(W) meters</h5>
                    <br />
                    <br />
                    <h5 style={{ color: "blue" }}>Admatch: 0%</h5>
                  0
{/* button group */}

                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" className="bt-1" id="1">-</button>
                      <button type="button" class="btn btn-primary" className="bt-2" id="2">+</button>
                    </div>
                  </div>
                  <hr class="solid"></hr>
                  <div className="billFooter">
                    <h5>$333,000 Month     </h5>

                    <h5>Aba,Abia</h5>
                  </div>

                </div>

              </div>
            </div>
            {/* 1 product end */}
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_01} />


                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Click to see details</a>
                    {/* <a href="#" className="btn btn-info proedit-btn">Edit</a> */}
                  </div>

                  <div className="pro-desc">
                    <h5 ><a style={{ color: "blue" }} href="/app/ecommerce/product-details">Abba-AAlong Factory Road FTF Main Park Abba</a></h5>

                    <h5>Billboard</h5>
                    <h5>Available Quantity: 2</h5>
                    <h5>Traffic: 0</h5>
                    <h5>Size:5M(H)X16M(W) meters</h5>
                    <br />
                    <br />
                    <h5 style={{ color: "blue" }}>Admatch: 0%</h5>
                  0
{/* button group */}

                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" className="bt-1" id="1">-</button>
                      <button type="button" class="btn btn-primary" className="bt-2" id="2">+</button>
                    </div>

                  </div>
                  <hr class="solid"></hr>
                  <div className="billFooter">
                    <h5>$333,000 Month     </h5>

                    <h5>Aba,Abia</h5>
                  </div>

                </div>

              </div>
            </div>
            {/* 2 product end */}
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_01} />


                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Click to see details</a>
                    {/* <a href="#" className="btn btn-info proedit-btn">Edit</a> */}
                  </div>

                  <div className="pro-desc">
                    <h5 ><a style={{ color: "blue" }} href="/app/ecommerce/product-details">Abba-AAlong Factory Road FTF Main Park Abba</a></h5>

                    <h5>Billboard</h5>
                    <h5>Available Quantity: 2</h5>
                    <h5>Traffic: 0</h5>
                    <h5>Size:5M(H)X16M(W) meters</h5>
                    <br />
                    <br />
                    <h5 style={{ color: "blue" }}>Admatch: 0%</h5>
                  0
{/* button group */}

                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" className="bt-1" id="1">-</button>
                      <button type="button" class="btn btn-primary" className="bt-2" id="2">+</button>
                    </div>
                  </div>
                  <hr class="solid"></hr>
                  <div className="billFooter">
                    <h5>$333,000 Month     </h5>

                    <h5>Aba,Abia</h5>
                  </div>

                </div>

              </div>
            </div>
            {/* 3 product end */}
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_01} />


                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Click to see details</a>
                    {/* <a href="#" className="btn btn-info proedit-btn">Edit</a> */}
                  </div>

                  <div className="pro-desc">
                    <h5 ><a style={{ color: "blue" }} href="/app/ecommerce/product-details">Abba-AAlong Factory Road FTF Main Park Abba</a></h5>

                    <h5>Billboard</h5>
                    <h5>Available Quantity: 2</h5>
                    <h5>Traffic: 0</h5>
                    <h5>Size:5M(H)X16M(W) meters</h5>
                    <br />
                    <br />
                    <h5 style={{ color: "blue" }}>Admatch: 0%</h5>
                  0
{/* button group */}

                    <div class="btn-group">
                      <button type="button" class="btn btn-primary" className="bt-1" id="1">-</button>
                      <button type="button" class="btn btn-primary" className="bt-2" id="2">+</button>
                    </div>
                  </div>
                  <hr class="solid"></hr>
                  <div className="billFooter">
                    <h5>$333,000 Month     </h5>

                    <h5>Aba,Abia</h5>
                  </div>

                </div>

              </div>
            </div>
            {/* 4 product end */}


          </div>
        </div>
      </div>
    );
  }
}

export default Billboards;