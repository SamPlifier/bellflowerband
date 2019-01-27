import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const Redirect = Router.Redirect;
const NotFoundRoute = Router.NotFoundRoute;

const routes = (
    <Route name="app" path="/" handler={require('App')}>
        <DefaultRoute handler={require('App')} />
        <Route name="try" handler={require('./components/try')}/>
        <Route name="try2" handler={require('./components/try2')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);
