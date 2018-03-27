import Home from '../Home';
import User from '../User';

export default {
  routes: [
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/user',
      component: User,
      exact: true
    },
    {
      path: '/user/:id',
      component: User,
      exact: true
    },
    {
      path: '/profile',
      component: Home,
      exact: true
    }
  ],
  redirects: [
    {
      from: '/posts',
      to: '/profile',
      status: 301
    },
    {
      from: '/time',
      to: '/user',
      status: 302
    }
  ]

}
