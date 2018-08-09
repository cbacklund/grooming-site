import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Home.css";

class Home extends Component {

  componentDidMount() {
    document.title = "Bark Avenue | Home"
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
          </Col>
          <Col size="md-8">
            <h1>
              Welcome to Bark Avenue Pet Salon
            </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <p>
              Have you been looking for an experienced groomer to groom your dog? At Pet Salon Bark Avenue, we treat your dog like we would our own.
              We are here to provide a gentle and safe grooming experience for your dog. From the super excited puppies coming in for their first grooming experience,
              to the senior dogs that don’t have the energy they once used to, we have the experience needed to handle all different temperaments and energy levels.
              We also are knowledgeable in handling dogs with special needs, as well as able to handle many dogs with aggressive tendencies.
            </p>
          </Col>
          <Col size="md-5">
            <p>
              Our Company believes in continually improving our performance. We attend educational seminars to learn the newest grooming techniques,
              and are a member of the ISCC – International Society of Canine Cosmetologists. We have a solid website of information for our clients,
              as well as an online booking option for scheduling their next grooming appointment. We appreciate our customers and strive to provide
              the best quality service for them each time they enter our shop.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Home;