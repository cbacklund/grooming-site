import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import ContactUs from "./Pages/ContactUs";
import Quote from "./Pages/Quote";
import Services from "./Pages/Services";
import Staff from "./Pages/Staff";
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
                <Route exact path="/booking" component={Booking} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/quote" component={Quote} />
                <Route exact path="/services" component={Services} />
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
