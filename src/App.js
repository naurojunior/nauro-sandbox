import React, { Component } from 'react';
import { BrowserRouter,  Switch, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Why from './Why';
import Changelog from './Changelog';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/why" component={Why} />
            <Route path="/changelog" component={Changelog} />
        </Switch>
        </BrowserRouter>
    </div>
    );
  }
}

export default App;
