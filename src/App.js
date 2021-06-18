import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import history from './history'

import Main from './Pages/Main';
import Todo from './Pages/Todo';
import Users from './Pages/Users';

export default class App extends Component {

  render(){
    return (
    <div>
      <Router history={history}>

          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Todo" component={Todo} />
            <Route path="/Users" component={Users} />
          </Switch>

    </Router>
    </div>
  )
}
}
