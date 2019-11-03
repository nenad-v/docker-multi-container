import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from '../pages/Home';
import About from '../pages/About';

const App = (props) => {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    </Router>
  )
}

export default App;