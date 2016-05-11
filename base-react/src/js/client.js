import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const root = document.querySelector('#root');

import Layout from './pages/Layout';
import Archives from './pages/Archives';
import Settings from './pages/Settings';
import Featured from './pages/Featured';
import Others from './pages/Others';
ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:artive)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="others" name="others" component={Others}></Route>
    </Route>
  </Router>
,root);
// ReactDom.render(<Layout/>,root);
/* import Layout from './components/Layout';
ReactDom.render(<Layout />,root); */

/* import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

ReactDom.render(
  <Router history={hasHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
       <Route path="archives(/:artive)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>
)
 */
