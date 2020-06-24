import React, { Component } from 'react';
import Users from "./Users/users";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Profile from './Profile/Profile'
import Confirm from './Confirm/confirm'
import './App.css';
class App extends Component {


  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/userInfo" component={Profile} />
        <Route path='/confirmation' component={Confirm}/>
        <Redirect to="/" />
      </Switch>
    );

    return (
      <React.Fragment>
        <nav className="Toolbar">LetsVenture <span style={{float:"right"}}>Sign In</span></nav>
        {/* <div><Users/></div> */}
        <div style={{ marginTop: '65px' }}>
          {routes}
        </div>

      </React.Fragment>
    )
  }
}

export default App;