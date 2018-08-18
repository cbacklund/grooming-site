import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import "./Booking.css";

class Booking extends Component {

  componentDidMount() {
    document.title = "Bark Avenue | Booking"
  }

  state = {
    name: "",
    dogName: "",
    services: "",
    phoneNumber: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
          </Col>
          <Col size="md-6">
            <h1>
              Book An Appointment
            </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (Required)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="Phone Number (Required)"
              />
              <Input
                value={this.state.dogName}
                onChange={this.handleInputChange}
                name="dogName"
                placeholder="Dog Name (Required)"
              />
              <Input
                value={this.state.services}
                onChange={this.handleInputChange}
                name="services"
                placeholder="Services (Required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.phoneNumber && this.state.dogName && this.state.services)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-1">
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
          </Col> */}
        </Row>
      </Container>
    )
  }
}
export default Booking;