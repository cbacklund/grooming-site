import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUS";
import ContactUs from "./components/Pages/ContactUs";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/contact" component={ContactUs} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
