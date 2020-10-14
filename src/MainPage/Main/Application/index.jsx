/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Chat from './chat';
import Calander from './calander';
import Email from './email';
import Compose from './compose';
import MailView from './mailview';

const DashboardRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/chat`} />
      <Route path={`${match.url}/chat`} component={Chat} />
      <Route path={`${match.url}/calendar`} component={Calander} />
      <Route path={`${match.url}/inbox`} component={Email} />
      <Route path={`${match.url}/compose`} component={Compose} />
      <Route path={`${match.url}/mail-view`} component={MailView} />
   </Switch>
  
);

export default DashboardRoute;
