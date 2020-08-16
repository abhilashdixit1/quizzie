import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'

import Header from './Components/Header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/dash" component={Dashboard}/>
         <Route component={Home}/>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
