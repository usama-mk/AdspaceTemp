
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import {Product_01,Product_09,Product_10,Product_11,Product_Thumb_01,Product_Thumb_09,Product_Thumb_10,
     Product_Thumb_11,Avatar_09,Avatar_10,Avatar_11} from '../../../imagepath';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider,LightgalleryItem } from "react-lightgallery";

class ProductsView extends Component {
   constructor(props) {
      super(props);
      this.state = {
         productviewimg :  Product_01
      };
    }
   render() {
      const{productviewimg} = this.state
      return ( 
         <div className="page-wrapper">
         <Helmet>
             <title>Ventura - Product Details</title>
             <meta name="description" content="Dashboard"/>					
         </Helmet>
         <div className="content container-fluid">
           <div className="page-header">
             <div className="row">
               <div className="col-sm-12">
                 <h3 className="page-title">Product Details</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item"><a href="/app/index">Dashboard</a></li>
                   <li className="breadcrumb-item active">Product Details</li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="card">
             <div className="card-body">
               <div className="row">
                 <div className="col-md-6 col-sm-12">
                   <div className="product-view">
                     <div className="proimage-wrap">
                       <div className="pro-image" id="pro_popup">
                          <LightgalleryProvider>
                              <LightgalleryItem group="any" src={Product_01}>
                                 <img className="img-fluid" src={productviewimg} alt="Product Image" />
                              </LightgalleryItem> 
                          </LightgalleryProvider>                                                   
                        </div>
                       <ul className="proimage-thumb">
                         <li>
                           <a onClick={()=> this.setState({productviewimg :Product_01 })} style={{cursor:"pointer"}}><img src={Product_Thumb_01} alt="Product Image" /></a>
                         </li>
                         <li>
                           <a onClick={()=> this.setState({productviewimg :Product_09 })} style={{cursor:"pointer"}}><img src={Product_Thumb_09} alt="Product Image" /></a>
                         </li>
                         <li>
                           <a onClick={()=> this.setState({productviewimg :Product_10 })} style={{cursor:"pointer"}} ><img src={Product_Thumb_10} alt="Product Image" /></a>
                         </li>
                         <li>
                           <a onClick={()=> this.setState({productviewimg :Product_11 })} style={{cursor:"pointer"}}><img src={Product_Thumb_11} alt="Product Image" /></a>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6 col-sm-12">
                   <div className="product-info">
                     <h2>Apple MacBook Pro</h2>
                     <p className="mb-0">Product ID: PRO-0001</p>
                     <div className="rating">
                       <p>
                         <span className="mr-1"><i className="fa fa-star rated" /></span>
                         <span className="mr-1"><i className="fa fa-star rated" /></span>
                         <span className="mr-1"><i className="fa fa-star rated" /></span>
                         <span className="mr-1"><i className="fa fa-star rated" /></span>
                         <span className="mr-1"><i className="fa fa-star-o " /></span>
                         <span>/ Reviews (3)</span>
                       </p>
                     </div>
                     <p className="product_price">$5528</p>
                     <p><b>Availability:</b> In Stock</p>
                     <div>
                       <button type="button" className="btn btn-primary">
                         <i className="fa fa-shopping-cart" /> Add to cart
                       </button>
                     </div>
                   </div>
                 </div>
                 <div className="col-sm-12">
                   <ul className="nav nav-tabs nav-tabs-bottom">
                     <li className="nav-item"><a className="nav-link active" href="#product_desc" data-toggle="tab">Description</a></li>
                     <li className="nav-item"><a className="nav-link" href="#product_reviews" data-toggle="tab">Reviews</a></li>
                   </ul>
                   <div className="tab-content">
                     <div className="tab-pane show active" id="product_desc">
                       <div className="product-content">
                         <p>The MacBook is carved out of solid aluminum, thus giving it a distinctive look and a grayish-white hue. The MacBook Air in particular has a thin and light design. There are two versions of the MacBook Air: the 11-inch, with an 11.6-inch screen; and the 13-inch, with a 13.3-inch screen. Apple splits the MacBook Pro into a 13-inch and a 15-inch, with the latter consisting of a 15.4-inch screen. Each computer has a full-size, backlit 78-key keyboard.</p>
                         <p>Apple bundles each MacBook with the OS X operating system. On each computer there's a dual-core processor from Intel’s Intel Core brand, with Turbo Boost technology for increased performance. Each MacBook Air gets a mid-range Intel Core i5, with a processing speed of 1.7 or 1.8 GHz. The 13-inch MacBook Pro has a 2.5- or 2.9-GHz chip, while the one on the 15-inch MacBook Pro is a more powerful but slower 2.3 GHz quad-core Intel Core i7. Peak installed memory on the MacBook Air is 8GB, with 1600MHz DDR3 architecture.</p>
                         <p>The built-in Intel HD Graphics 4000 handles basic video duties, with the 15-inch MacBook Pro getting a more advanced NVIDIA GeForce GT 650M. Audio specifications include stereo speakers and a headphone port, with one omnidirectional microphone on the MacBook Air and two on the MacBook Pro. Wireless technology on the MacBook consists of Bluetooth 4.0 wireless technology for streaming audio and a Wi-Fi network adapter that enables Web browsing. Also included is a FaceTime Camera with a peak resolution of 720 pixels. For storage, the MacBook Air has a 64- or 128-GB flash drive, while the MacBook Pro has 500 or 750GB of hard drive space. Added on the MacBook Pro is an 8x Super Drive slot for playing CDs and DVDs.</p>
                         <p>Apart from the aforementioned headphone jack, each MacBook has at least one port for the power adapter, two USB 3.0 ports and Apple/Intel’s Thunderbolt interface. A Secure Digital flash memory card slot is present on all models but the 11-inch MacBook Air. Exclusive to the MacBook Pro are an Ethernet port for wired internet connection, FireWire 800 port for data transfer and an anti-theft device called Kensington Security Slot. The 15-inch MacBook Pro is the only model with audio line-in and audio line-out jacks for recording purposes.</p>
                       </div>
                     </div>
                     <div className="tab-pane" id="product_reviews">
                       <div className="product-reviews">
                         <h4 className="mb-3">Reviews (3)</h4>
                         <ul className="review-list">
                           <li>
                             <div className="review">
                               <div className="review-author">
                                 <img className="avatar" alt="User Image" src={Avatar_09} />
                               </div>
                               <div className="review-block">
                                 <div className="review-by">
                                   <span className="review-author-name">Mark Boydston</span>
                                   <div className="rating">
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star-o" />
                                   </div>
                                 </div>
                                 <p>With great power comes great capability</p>
                                 <span className="review-date">Feb 6, 2019</span>
                               </div>
                             </div>
                           </li>
                           <li>
                             <div className="review">
                               <div className="review-author">
                                 <img className="avatar" alt="User Image" src={Avatar_10} />
                               </div>
                               <div className="review-block">
                                 <div className="review-by">
                                   <span className="review-author-name">Tori Carter</span>
                                   <div className="rating">
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                   </div>
                                 </div>
                                 <p>True value for money</p>
                                 <span className="review-date">Jan 29, 2019</span>
                               </div>
                             </div>
                           </li>
                           <li>
                             <div className="review">
                               <div className="review-author">
                                 <img className="avatar" alt="User Image" src={Avatar_11} />
                               </div>
                               <div className="review-block">
                                 <div className="review-by">
                                   <span className="review-author-name">Julie Rodriguez</span>
                                   <div className="rating">
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star rated" />
                                     <i className="fa fa-star-o" />
                                     <i className="fa fa-star-o" />
                                   </div>
                                 </div>
                                 <p>Excellent quality and Excellent Battery Backup</p>
                                 <span className="review-date">Dec 13, 2018</span>
                               </div>
                             </div>
                           </li>
                         </ul>
                         <div className="all-reviews">
                           <button type="button" className="btn btn-primary">View All Reviews</button>
                         </div>
                       </div>
                       <div className="product-write-review">
                         <h4 className="mb-3">Write Review</h4>
                         <form>
                           <div className="row">
                             <div className="col-sm-8">
                               <div className="form-group">
                                 <label>Name <span className="text-red">*</span></label>
                                 <input type="text" className="form-control" />
                               </div>
                               <div className="form-group">
                                 <label>Your email address <span className="text-red">*</span></label>
                                 <input type="email" className="form-control" />
                               </div>
                               <div className="form-group">
                                 <label>Rating <span className="text-red">*</span></label>
                                 <div className="rating">
                                   <i className="fa fa-star rated" />
                                   <i className="fa fa-star rated" />
                                   <i className="fa fa-star rated" />
                                   <i className="fa fa-star rated" />
                                   <i className="fa fa-star-o" />
                                 </div>
                               </div>
                               <div className="form-group">
                                 <label>Review Comments</label>
                                 <textarea rows={4} className="form-control" defaultValue={""} />
                               </div>
                               <div className="review-submit">
                                 <input type="submit" defaultValue="Submit" className="btn" />
                               </div>
                             </div>
                           </div>
                         </form>
                       </div>
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

export default ProductsView;