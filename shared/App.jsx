import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RedirectWithStatus from './RedirectWithStatus';
import routeOptions from './routes/routes';

class App extends React.Component {

  render() {
    const routes = routeOptions.routes.map((route, index) => {
      return <Route {...route} key={'ROUTE_' + index}/>
    });
    const redirects = routeOptions.redirects.map((redirect, index) => {
      return <RedirectWithStatus {...redirect} key={'REDIRECT_' + index} />
    });

    return (
      <div>
        <h2>Hello Bro {}</h2>
        <Switch>
          {routes}
          {redirects}
        </Switch>
      </div>
    )
  }
}

export default App;
