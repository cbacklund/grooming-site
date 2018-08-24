import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./Booking.css";

class Booking extends Component {

  componentDidMount() {
    document.title = "Bark Avenue | Booking"
  }

  state = {
    name: "",
    phoneNumber: "",
    dogName: "",
    service: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    //event.preventDefault();
    if (this.state.name && this.state.phoneNumber && this.state.dogName && this.state.service) {
      API.saveBooking({
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        dogName: this.state.dogName,
        service: this.state.service
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    }
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
                value={this.state.service}
                onChange={this.handleInputChange}
                name="service"
                placeholder="Service (Required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.phoneNumber && this.state.dogName && this.state.service)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Booking;