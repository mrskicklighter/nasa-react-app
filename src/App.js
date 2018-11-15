import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';

// App Components 
import Home from './components/Home';
import Header from './components/Header';
import SearchDate from './components/SearchDate';
import Today from './components/Today';
import Multiple from './components/Multiple';

// Main section for setting up the react Router 

const App = () => (
  <BrowserRouter>
    <div className="container">
    <div>
      <Header/>
      </div>
      <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/today" component={Today}/>
        <Route path="/searchDate" component={SearchDate}/>
        <Route path="/multiple" component={Multiple}/>
        </Switch>
    </div>
    </div>
  </BrowserRouter>
);



export default App;
