import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import LocationImg from "../../components/img/location.png";
import PhoneImg from "../../components/img/phone.png";
import "./ContactUs.css";


class ContactUs extends Component {

  componentDidMount() {
    document.title = "Bark Avenue | Contact Us"
  }

  state = {
    name: "",
    phoneNumber: "",
    email: "",
    breed: "",
    message: ""
  }

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
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (Optional)"
              />
              <Input
                value={this.state.breed}
                onChange={this.handleInputChange}
                name="breed"
                placeholder="Dog Breed (Required)"
              />
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Message (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.phoneNumber && this.state.breed)}
                onClick={this.handleFormSubmit}
              >
                Submit Message
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
              <img src={ LocationImg } alt="Location"/>
              <br />
              14001 Grand Avenue
              <br />
              Burnsville, MN 55337
              <br />
              <img src={ PhoneImg } alt="Phone"/>
              <br />
              (952) 435-7798
            </h2>   
            <h1>
              Hours of Operation
            </h1>
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

export default ContactUs;