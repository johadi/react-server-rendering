import React from 'react';
import {Provider} from 'react-redux';
import store from '../shared/store/store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

ReactDOM.hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>), document.getElementById('app'));
