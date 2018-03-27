import React from 'react';
import { Route, Redirect } from 'react-router';

export default ({from, to, status, key}) => (
  <Route key={key} render={({staticContext}) => {
    if(staticContext) {
      staticContext.status = status;
    }

    return <Redirect from = {from} to={to} />
  }}/>
)
