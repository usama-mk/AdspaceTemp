import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//Main App
import DefaultLayout from './Sidebar/DefaultLayout';
import Error404 from '../MainPage/Pages/ErrorPage/error404';
import Error500 from '../MainPage/Pages/ErrorPage/error500';
import Login from '../MainPage/Pages/Authentication/login';
import Register from '../MainPage/Pages/Authentication/register';
import Forgotpassword from '../MainPage/Pages/Authentication/forgotpassword';
import LockScreen from '../MainPage/Pages/Authentication/lockscreen';
import $ from 'jquery';

export default class app extends Component {
    componentDidMount(){
        if (window.location.pathname.includes("login") || window.location.pathname.includes("register") || window.location.pathname.includes("forgotpassword")
        || window.location.pathname.includes("otp")|| window.location.pathname.includes("lockscreen") ) {
            $('body').addClass('account-page');
        }else if (window.location.pathname.includes("error-404") || window.location.pathname.includes("error-500") ) {
            $('body').addClass('error-page');
        }
        if($('#demoSettings').length === 0) {
            $('.main-wrapper').append('<div class="skin-settings" id="demoSettings">'+
                '<div class="skin-sett-icon"><i class="fa fa-cog"></i></div>'+
                '<div class="skin-sett-body">'+
                    '<h4>Template Colors</h4>'+
                    '<ul class="skin-colors">'+
                        '<li><a class="skin-purple" data-color="default" href="#"></a></li>'+
                        '<li><a class="skin-red" data-color="red" href="#"></a></li>'+
                        '<li><a class="skin-teal" data-color="teal" href="#"></a></li>'+
                        '<li><a class="skin-orange" data-color="orange" href="#"></a></li>'+
                    '</ul>'+
                '</div>'+
            '</div>')
        }
        $(document).on('click', '.skin-sett-icon', function() {
            $('.skin-settings').toggleClass("active");
        });
        const hasTemp = localStorage.getItem('skin-color');
	
	if(!!hasTemp) {
        // $('head').append('<link id="tempSkin" rel="stylesheet" href="./style-'+hasTemp+'.css">')
        $('body').find('.skin-colors a').each(function(){
		const name = $(this).attr('data-color');
		
		if(name === hasTemp) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	})
	} else {
		$('body').find('.skin-colors a').each(function(){
			const name = $(this).attr('data-color');			
			if(name === 'default') {
				$(this).addClass('active');
			}
		});
    }
    $(document).on('click', '.skin-colors a', function(e){
		e.preventDefault();

		$(this).parent().siblings().find('a').removeClass('active');
		$(this).addClass('active');

		var skin = $(this).attr('data-color');
		if(skin === 'default') {
			localStorage.removeItem('skin-color');
            $('#tempSkin').remove();
            window.location.reload()
        } 
        else {
			if($('#tempSkin').length === 0) {
                // $('head').append('<link id="tempSkin" rel="stylesheet" href="./style-'+skin+'.css">')
                // require("../assets/css/style-"+skin+'.css')
			} else {                
                // $('#tempSkin').attr('href', './style-'+skin+'.css');
                // require("../assets/css/style-"+skin+'.css')    
			}
            localStorage.setItem('skin-color', skin);
            window.location.reload()
		}
	})
    }
       render(){
            const { location, match, user } = this.props;
            
            if (location.pathname === '/') {                 
                return (<Redirect to={'/app/index'} />);                
             }
            return (

                
                <Switch>                  
                    <Route path="/app" component={DefaultLayout} />
                    <Route path="/error-404" component={Error404} />
                    <Route path="/error-500" component={Error500} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgot-password" component={Forgotpassword} />
                    <Route path="/lock-screen" component={LockScreen} />
                </Switch>
            )
        }
         
}
