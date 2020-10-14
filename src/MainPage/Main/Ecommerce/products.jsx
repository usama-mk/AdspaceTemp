
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import {Product_01,Product_02,Product_03,Product_04,Product_05,Product_06,Product_07,Product_08} from '../../../imagepath';

class Products extends Component {
   render() {
      return ( 
        <div className="page-wrapper">
        <Helmet>
            <title>Ventura - Products</title>
            <meta name="description" content="Dashboard"/>					
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Products</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Products</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_01} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Apple MacBook Pro</a></h5>
                  <div className="price">$5528</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_02} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Samsung Galaxy S10 Plus</a></h5>
                  <div className="price">$799</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_03} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Apple iMac Pro</a></h5>
                  <div className="price">$6699</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_04} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Fujifilm Digital Camera</a></h5>
                  <div className="price">$4140</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_05} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Apple Watch Series 4</a></h5>
                  <div className="price">$703</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_06} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Apple iPhone Xs Max 6.5</a></h5>
                  <div className="price">$1199</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_07} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Logitech G633</a></h5>
                  <div className="price">$303</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="product">
                <div className="product-inner">
                  <img alt="alt" src={Product_08} />
                  <div className="cart-btns">
                    <a href="#" className="btn btn-primary addcart-btn">Add to cart</a>
                    <a href="#" className="btn btn-info proedit-btn">Edit</a>
                  </div>
                </div>
                <div className="pro-desc">
                  <h5><a href="/app/ecommerce/product-details">Apple Magic Keyboard</a></h5>
                  <div className="price">$112</div>
                </div>
              </div>
            </div>
          </div>
        </div>			
      </div>
      );
   }
}

export default Products;