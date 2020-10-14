
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
 
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import "./calendar.css"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { now } from 'jquery';
import moment from 'moment';

class Calendar extends Component {
    
  state = {
    iseditdelete : false,
    addneweventobj:null,
    isnewevent:false,
    isremoveafteredrop : false,
    event_title:"",
    event_color:'bg-success',
    weekendsVisible: true,
    eventDate:null,
    currentEvents: [],
    defaultEvents :  [
      {
        id:1,
        title: 'Event Name 4',
        start: new Date(now() + 148000000),
        className: 'bg-purple'
      },
      {
        id:2,
          title: 'Test Event 1',
          start: new Date(now()),
          end: new Date(now()),
          className: 'bg-success'
      },
      {
        id:3,
          title: 'Test Event 2',
          start: new Date(now() + 168000000),
          className: 'bg-info'
      },
      {
        id:4,
          title: 'Test Event 3',
          start: new Date(now() + 338000000),
          className: 'bg-primary'
      }],
    category_name:"",
    category_color:'text-success',
    category_array : [
      {id:12,title:"My Event One",className:"text-info",bgclassName:"bg-info",start: new Date(now()), end: new Date(now()),},
      {id:2,title:"My Event Two",className:"text-success",bgclassName:"bg-success",start: new Date(now() + 168000000),},
      {id:3,title:"My Event Three",className:"text-danger",bgclassName:"bg-danger",start: new Date(now() + 338000000),},
      {id:4,title:"My Event Four",className:"text-warning",bgclassName:"bg-warning",start: new Date(now() + 148000000),},
    ]
  }
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function(eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let circleclas = eventEl.getAttribute("circleclas");
        return {
          title: title,
          id: id,
          className : circleclas,
          create: false
        };
      }
      
    });
  }
  handleDateSelect = (selectInfo) => {
    this.setState({
      isnewevent : true,
      addneweventobj : selectInfo
    }) 
    
  }
  addnewevent(){
    const{event_title,event_color,addneweventobj } = this.state
      let calendarApi = addneweventobj.view.calendar

        calendarApi.unselect() // clear date selection

        if (event_title) {
          calendarApi.addEvent({
            id: 10,
            title : event_title,
            className: event_color,
            start: addneweventobj.startStr,
            end: addneweventobj.endStr,
            allDay: addneweventobj.allDay
          })
        }   
       this.setState({isnewevent : false})
  }
  
  onupdateModalClose() {
    this.setState({
      iseditdelete : false,
      event_title :""
    })  
  }
  oncreateeventModalClose() {
    this.setState({
      isnewevent : false,
      event_title :""
    })  
  }
  handleEventClick = (clickInfo) => {    
    this.setState({
      iseditdelete : true,
      event_title : clickInfo.event.title,
      calenderevent : clickInfo.event
    })    
  }
  removeevent(){
    const{calenderevent } = this.state
      calenderevent.remove()
      this.setState({iseditdelete : false})
  }
  clickupdateevent(){
    const{defaultEvents,calenderevent,event_title } = this.state
    const newArray = defaultEvents.slice()
    for(let i=0;i<newArray.length;i++){
      if(newArray[i].id === parseInt(calenderevent.id)){
        newArray[i].title = event_title
      }
    }
    this.setState({defaultEvents : newArray,iseditdelete:false})

  }
  addnewCategory(){
    const{category_name,category_color } = this.state
    let bgcolor=category_color
        if (category_name) {
          if(category_color){
            bgcolor  = bgcolor.replace("text","bg")
          }
          let catarray_list = {
            id:new Date().getTime(),title:category_name,className:category_color,bgclassName:bgcolor
          }
          this.setState(
            { category_array: [...this.state.category_array, catarray_list] }
          )
        }   
  }
  handleChangeEventdate = date => {
    this.setState({
      eventDate: date
    });
  };
  handleeventRecieve = info => {
    const id = new Date().getTime();
    const{isremoveafteredrop,category_array} = this.state
    let id_s = info.draggedEl.getAttribute("data")
    
    const newEvent = {
      title: info.draggedEl.getAttribute("title"),
      className: info.draggedEl.getAttribute("circleclas"),
      start: info.date,
      end: new Date(moment(info.date).add(1, "hour").valueOf()),
      id: id
    };
    this.setState({
      defaultEvents: this.state.defaultEvents.concat(newEvent)
    });
    if(isremoveafteredrop){
      const newList = category_array.filter((item) => item.id !== parseInt(id_s));      
      this.setState({
        category_array: newList
      });
    }
  }
   render() {
    const{defaultEvents,iseditdelete,isnewevent,event_title,event_color,category_color,category_array,
        category_name,eventDate,isremoveafteredrop } = this.state
      return ( 
        <div className="page-wrapper">
        <Helmet>
           <title>Ventura - Calendar</title>
           <meta name="description" content="Customers"/>					
        </Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Calendar</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/react/template/app/index">Dashboard</a></li>
                  <li className="breadcrumb-item active">Calendar</li>
                </ul>
              </div>
              <div className="col-auto text-right float-right ml-auto">
                <a href="#" className="add-btn" data-toggle="modal" data-target="#add_event"><span><i className="fe fe-plus" /></span> Create New</a>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <h4 className="card-title">Drag &amp; Drop Event</h4>
              <div id="external-events" className="mb-3">
                {category_array && category_array.map((catitem,index)=>
                    <div key={index} title={catitem.title} circleclas={catitem.bgclassName}
                    data={catitem.id} className="fc-event"><i className={"fa fa-circle "+ catitem.className} />{catitem.title}</div>
                )}
              </div>
              <div className="checkbox  mb-3">
                <input className="mr-1" id="drop-remove" type="checkbox" value={isremoveafteredrop} 
                  onChange={()=> this.setState({isremoveafteredrop : isremoveafteredrop ? false : true})}  />
                <label htmlFor="drop-remove">
                  Remove after drop
                </label>
              </div>
              <a href="#" data-toggle="modal" data-target="#add_new_event" className="btn mb-3 btn-primary btn-block">
                <i className="fa fa-plus" /> Add Category
              </a>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="card">
                <div className="card-body">
                  {/* <div id="calendar" /> */}
                  <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.state.weekendsVisible}
                        // initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                        events = {defaultEvents}
                        select={this.handleDateSelect}
                        eventClick={clickInfo=>this.handleEventClick(clickInfo)}
                        droppable={true}
                        drop={this.handleeventRecieve}
                    />
                </div>
              </div>
            </div>
          </div>
          {/* Edit Event Modal */}  
          <Modal centered isOpen={iseditdelete} >
                <ModalHeader toggle={() => this.onupdateModalClose()}> 
                    Event
                </ModalHeader>
                <ModalBody>
                  <form className='event-form'>
                    <label>Change event name</label>
                    <div className='input-group'>
                      <input className='form-control' type="text" value={event_title} 
                      onChange={(event) => this.setState({ event_title: event.target.value })} />
                      <span className='input-group-append'>
                        <button type="button" className='btn btn-success btn-md'
                          onClick={()=>this.clickupdateevent()}><i className="fa fa-check"/>Save</button>
                      </span>
                    </div>
                  </form>
                </ModalBody>  
                <ModalFooter>
                    <button type="button" className="btn btn-danger submit-btn delete-event" 
                        data-dismiss="modal" onClick={()=>this.removeevent()}>Delete</button>
                </ModalFooter>           
            </Modal> 
          {/* Add Event Modal */}         
          <div id="add_event" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Event</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Event Name <span className="text-danger">*</span></label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label>Event Date <span className="text-danger">*</span></label><br/>
                      <div className="form-control cal-icon">
                          <DatePicker style={{border : "none"}}
                              selected={eventDate}
                              onChange={this.handleChangeEventdate}
                            />
                      </div>
                    </div>
                    <div className="submit-section">
                      <button className="btn btn-primary submit-btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Event Modal */}
          {/* Add Event Modal */}
          <Modal centered isOpen={isnewevent} >
              <ModalHeader toggle={() => this.oncreateeventModalClose()}> 
                Add Event
              </ModalHeader>
              <ModalBody>
                <form>
                  <div className="form-group">
                      <label>Event Name</label>
                      <input className="form-control form-white" placeholder="Enter name" type="text" value={event_title} 
                    onChange={(event) => this.setState({ event_title: event.target.value })} />
                    </div>
                    <div className="form-group mb-0">
                      <label>Category</label>
                      <select className="form-control form-white" data-placeholder="Choose a color..."  value={event_color} 
                    onChange={(event) => this.setState({ event_color: event.target.value })}>
                        <option value="bg-success">Success</option>
                        <option value="bg-danger">Danger</option>
                        <option value="bg-info">Info</option>
                        <option value="bg-primary">Primary</option>
                        <option value="bg-warning">Warning</option>
                        <option value="bg-inverse">Inverse</option>
                      </select>
                    </div>
                  </form>
              </ModalBody>  
              <ModalFooter>
                <button type="button" className="btn btn-success save-event submit-btn" onClick={()=>this.addnewevent()}>Create event</button>
              </ModalFooter>           
            </Modal>
          {/* /Add Event Modal */}
          {/* Add Category Modal */}
          <div className="modal fade" id="add_new_event">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add Category</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Category Name</label>
                      <input className="form-control form-white" placeholder="Enter name" type="text"  value={category_name} 
                    onChange={(event) => this.setState({ category_name: event.target.value })} />
                    </div>
                    <div className="form-group mb-0">
                      <label>Choose Category Color</label>
                      <select className="form-control form-white" data-placeholder="Choose a color..."  value={category_color} 
                    onChange={(event) => this.setState({ category_color: event.target.value })}>
                        <option value="text-success">Success</option>
                        <option value="text-danger">Danger</option>
                        <option value="text-info">Info</option>
                        <option value="text-primary">Primary</option>
                        <option value="text-warning">Warning</option>
                        <option value="text-inverse">Inverse</option>
                      </select>
                    </div>
                    <div className="submit-section">
                      <button type="button"  onClick={()=>this.addnewCategory()} className="btn btn-primary save-category submit-btn" data-dismiss="modal">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Add Category Modal */}
        </div>			
      </div>
      );
   }
}

export default Calendar;