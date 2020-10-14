
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

class Compose extends Component {
    onImageUpload = (fileList) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          ReactSummernote.insertImage(reader.result);
        }
        reader.readAsDataURL(fileList[0]);      
    }
   render() {
      return ( 
        <div className="page-wrapper">
        <Helmet>
           <title>Ventura - Compose</title>
           <meta name="description" content="Customers"/>					
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Compose</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/react/template/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Compose</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-3 col-md-4">
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
                  <form action="/react/template/app/application/inbox">
                    <div className="form-group">
                      <input type="email" placeholder="To" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Cc" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Bcc" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" className="form-control" />
                    </div>
                    <div className="form-group">
                    <ReactSummernote
                      value="Default value"
                      options={{
                        lang: 'ru-RU',
                        height: 350,
                        dialogsInBody: true,
                        toolbar: [
                          ['style', ['style']],
                          ['font', ['bold', 'underline', 'clear']],
                          ['fontname', ['fontname']],
                          ['para', ['ul', 'ol', 'paragraph']],
                          ['table', ['table']],
                          ['insert', ['link', 'picture', 'video']],
                          ['view', ['fullscreen', 'codeview']]
                        ]
                      }}
                      onChange={this.onChange}
                      onImageUpload={this.onImageUpload}
                    />
                      {/* <textarea rows={4} className="form-control summernote" placeholder="Enter your message here" defaultValue={""} /> */}
                    </div>
                    <div className="form-group mb-0">
                      <div className="text-center">
                        <button className="btn btn-primary"><i className="fa fa-send m-r-5" /> <span>Send</span></button>
                        <button className="btn btn-success m-l-5" type="button"> <i className="fa fa-floppy-o m-r-5" /> <span>Draft</span></button>
                        <button className="btn btn-danger m-l-5" type="button"> <i className="fa fa-trash-o m-r-5" /><span>Delete</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>			
      </div>
      );
   }
}

export default Compose;