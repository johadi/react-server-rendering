import express from 'express';
import handleAsync from 'async-error-handler';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../shared/store/store';
import path from 'path';
import App from '../shared/App';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

// API endpoint
app.get('/api/users', handleAsync(async (req, res) => {
  const users = await getUsers();
  res.status(200).send(users);
},
  (err,req, res) => res.status(500).send(err)));

// API endpoint
app.get('/api/profile', handleAsync(async (req, res) => {
    const userDetail = await getUserDetails({ name: 'johadi', age: 34});
    res.status(200).send(userDetail);
  },
  (err,req, res) => res.status(500).send(err)));

// Other endpoints users can access in our application
app.get('*', handleAsync(async (req, res) => {
  await App.getUsers(store);
  const context = {};

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  const initalState = store.getState();

  if(context.url) {
    const redirectUrl = `${req.protocol}://${req.headers.host}${context.url}`;
    return res.redirect(redirectUrl);
  }

  const finalHtml = renderFullPage(html, initalState);
  res.send(finalHtml);
}));

app.listen(3000, () => {
  console.log('Server started successfully on port 3000');
});

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>React server side rendering</title>
    </head>
    <body>
        <div id="app">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="bundle.js"></script>
    </body>
    </html>
  `;
}

// Asynchronous mock example function
const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {id: 1, name: 'Jimoh Hadi', age: 35},
        {id: 2, name: 'Sanni Muhammed', age: 30},
        {id: 3, name: 'Oliver queen', age: 25},
        {id: 4, name: 'Lebron James', age: 43},
        {id: 5, name: 'Rodger Federer', age: 20},
      ];
      return resolve(users);
    }, 3000);
  })
}

const getUserDetails = (userDetails) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userDetails);
    }, 2000)
  });
}
