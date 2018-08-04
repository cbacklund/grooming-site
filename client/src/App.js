import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Staff from "./Pages/Staff";
import Booking from "./Pages/Booking";
import NavBar from "./components/NavBar";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div class="row">
            <div class="col-12">
            <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/stylist" component={Staff} />
                <Route exact path="/booking" component={Booking} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
