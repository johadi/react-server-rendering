import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import User from './User';
import Home from './Home';
import { getUsersAction } from './actions/userAction';

class App extends React.Component {
  static getUsers(store){
    return axios.get('http://localhost:3000/api/users')
      .then(response => {
        store.dispatch(getUsersAction(response.data))
      })
  }

  render() {
    return (
      <div>
        <h2>Hello Bro {}</h2>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/profile" component={User}/>
          <Route exact path="/user" component={User}/>
          <Route exact path="/user/:id" component={User}/>
          <Route exact path="/places" render={() => <Redirect to = {"/profile"}/>}/>
        </Switch>
      </div>
    )
  }
}

export default App;
