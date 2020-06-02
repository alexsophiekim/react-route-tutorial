import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Skills from './containers/Skills';
import Projects from './containers/Projects';
import Project from './containers/Project';
import Contact from './containers/Contact';

import './index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="project" component={Projects}>
      <Route path="project/:id" component={Project}/>
      <Route path="skills" component={Skills}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);


/*problem causing comma is Parsing error: Unterminated JSX contents - need to sort out!!!*/
