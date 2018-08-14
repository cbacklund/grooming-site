import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import "./Booking.css";


class Booking extends Component {

  state = {
    name: "",
    dogName: "",
    services: ""
  }
    // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, dogName, services, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value,
      [dogName]: value,
      [services]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ name: "", dogName: "", services: "" });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="Name"
                placeholder="Name (Required)"
              />
              <Input
                type="text"
                value={this.state.dogName}
                onChange={this.handleInputChange}
                name="Dog Name"
                placeholder="Dog Name (Required)"
              />
              <Input
                type="text"
                value={this.state.services}
                onChange={this.handleInputChange}
                name="Services"
                placeholder="Services"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.dogName && this.state.services)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-1">
          </Col>
          <Col size="md-5">
            <h1>
              Contact Us
            </h1>
            <h2>
              <br />
              14001 Grand Avenue
              <br />
              Burnsville, MN 55337
              <br />
              <br />
              <br />
              (952) 435-7798
            </h2>   
            <h1>
              Hours of Operation
            </h1>
            <br />
            <p>
              Tuesday/Thursday: 8 am-7 pm
              <br />
              Wednesday/Friday: 8 am-5 pm
              <br />
              Saturday: 8 am-1 pm
              <br />
              Closed Sunday/Monday
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Booking;