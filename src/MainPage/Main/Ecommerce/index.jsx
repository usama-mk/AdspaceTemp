/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Billboards from './billboards';
import branding from './branding';
import Customers from './customers';
import Invoice from './invoice';
import Orders from './order';
import Products from './products';
import ProductView from './productview';

const DashboardRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/customers`} />
      <Route path={`${match.url}/customers`} component={Customers} />
      <Route path={`${match.url}/billboards`} component={Billboards} /> 
      <Route path={`${match.url}/branding`} component={branding} />
      <Route path={`${match.url}/products`} component={Products} />
      <Route path={`${match.url}/invoice`} component={Invoice} />
      <Route path={`${match.url}/orders`} component={Orders} />
      <Route path={`${match.url}/product-details`} component={ProductView} />
   </Switch>
  
);

export default DashboardRoute;
