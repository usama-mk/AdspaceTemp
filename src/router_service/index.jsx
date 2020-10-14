
//main
import Dashboard from '../MainPage/Main/dashboard';
import Ecommerce from '../MainPage/Main/Ecommerce';
import Application from '../MainPage/Main/Application';
import MyProfile from '../MainPage/Pages/profile';
import BlankPage from '../MainPage/Pages/blank';
import Users from '../MainPage/Pages/users';
import VectorMaps from '../MainPage/Pages/maps-vector';
import Components from '../MainPage/UIinterface/components';
import Basicinputs from "../MainPage/UIinterface/Forms/basicinputs"
import Inputgrp from "../MainPage/UIinterface/Forms/Inputgroups"
import HorizontalForm from "../MainPage/UIinterface/Forms/HorizontalForm"
import VerticalForm from "../MainPage/UIinterface/Forms/VerticalForm"
import Formmask from "../MainPage/UIinterface/Forms/Formmask"
import Formvalidation from "../MainPage/UIinterface/Forms/Formvalidation"
import Basic from "../MainPage/UIinterface/Tables/basic"
import DataTable from "../MainPage/UIinterface/Tables/data-table"

export default [  
   {
      path: 'index',
      component: Dashboard
   }, 
   {
      path: 'ecommerce',
      component: Ecommerce
   },
   {
      path: 'application',
      component: Application
   },   
   {
      path: 'profile',
      component: MyProfile
   },  
   {
      path: 'users',
      component: Users
   },
   {
      path: 'blank-page',
      component: BlankPage
   },  
   {
      path: 'maps-vector',
      component: VectorMaps
   },
   {
      path: 'components',
      component: Components
   },
   {
      path: 'form-basic-inputs',
      component: Basicinputs
   },
   {
      path: 'form-input-groups',
      component: Inputgrp
   },
   {
      path: 'form-horizontal',
      component: HorizontalForm
   },
   {
      path: 'form-vertical',
      component: VerticalForm
   },
   {
      path: 'form-mask',
      component: Formmask
   },
   {
      path: 'form-validation',
      component: Formvalidation
   },
   {
      path: 'tables-basic',
      component: Basic
   },
   {
      path: 'data-tables',
      component: DataTable
   }   
]