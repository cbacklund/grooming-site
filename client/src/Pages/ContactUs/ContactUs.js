import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./ContactUs.css";


class ContactUs extends Component {

  componentDidMount(){
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
          <Col size="md-4 offset-md-4">
            <h1>
              Contact Us
            </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h4>
              Address and Phone Number
              </h4>
            <p>
              Address:
              <br />
              14001 Grand Avenue
              <br />
              Burnsville, MN
              <br />
              55337
              <br />
              Phone Number:
              <br />
              (952) 435-7798
            </p>
          </Col>
          <Col size="md-6">
            <h4>
              Hours of Operation
            </h4>
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
        <Row>
          <Col size="md-6 offset-md-3">
          <h4>
            To Receive a Free Quote, Please Click Here
          </h4>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 offset-md-3">
            <h4>
              Feel Free To Fill Out Form To Contact Us
            </h4>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 offset-md-3">
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
        </Row>
      </Container>
    )
  }

}

export default ContactUs;