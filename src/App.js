import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Redirect, Switch, Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Header from '../src/Components/Common/Header'
import Footer from '../src/Components/Common/Footer'
import Home from '../src/Components/Home'
import Dashboard from '../src/Components/Dashboard'
import Settings from '../src/Components/Settings'
import Help from '../src/Components/Help'

const history = createHistory();

function App() {
  return (
    <React.Fragment>
          <Router history={history}>
            <main className="container-fluid wrapper">
              <Header history={history} />
              <div className="container wrapper-template">
                <Switch>                  
                  <Route path="/home" component={Home} /> 
                  <Route path="/dashboard" exact component={Dashboard}  />                  
                  <Route path="/profile" component={Settings} />
                  <Route path="/howto" component={Help} />
                  <Redirect from="/" exact to="/home" />
                </Switch>
              </div>
              <Footer />
            </main>
          </Router>
      
    </React.Fragment>
  )
}

export default App;
