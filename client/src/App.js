import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";
import Staff from "./components/Pages/Staff"
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
                <Route exact path="/stylist" component={Staff} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
