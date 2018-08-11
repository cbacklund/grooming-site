import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import FlipCard from 'react-flipcard-2';
import "./Services.css";

class Services extends Component {

  componentDidMount() {
    document.title = "Bark Avenue | Services"
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
          </Col>
          <Col size="md=6">
            <h1>
              Bark Avenue Grooming Services
            </h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col size="md-4">
            <FlipCard>
              <div>
                <h1>
                  Grooming Service
              </h1>
              </div>
              <div>
                <p>
                  Full Grooming Services includes: Bath, dry, clippered haircut up to 1 inch in length,
                  nail trimming, ear cleaning, & teeth cleaning.
                </p>
              </div>
            </FlipCard>
          </Col>
          <Col size="md-4">
            <FlipCard>
              <div>
                <h1>
                  Bath/Deshed Service
              </h1>
              </div>
              <div>
                <p>
                  Don’t need a haircut but your dog is shedding all over the house?
                  Come in and let us deshed their coats and make them clean.
                </p>
              </div>
            </FlipCard>
          </Col>
          <Col size="md-4">
            <FlipCard>
              <div>
                <h1>
                  Puppy Basics
              </h1>
              </div>
              <div>
                <p>
                  Bring in your puppy for their first grooming experience.
                  This puppy basics package will introduce them to the grooming shop.
                </p>
              </div>
            </FlipCard>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col size="md-4">
            <FlipCard>
              <div>
                <h1>
                  Senior Dogs
                </h1>
              </div>
              <div>
                <p>
                  Older dogs still like to smell fresh and clean.
                  Bring in your senior dog for a gentle and calm grooming experience.
                </p>
              </div>
            </FlipCard>
          </Col>
          <Col size="md-4">
            <FlipCard>
              <div>
                <h1>
                  Nail Trimming
                </h1>
              </div>
              <div>
                <p>
                  A la carte nail trimming/filing. Please book ahead of time to schedule a nail trimming appointment.
                  We can usually schedule you the same day!
                </p>
              </div>
            </FlipCard>
          </Col>
          <Col size="md-4">
            <FlipCard>
              <div>
                <h1>
                  Aggressive Dogs
                </h1>
              </div>
              <div>
                <p>
                  At this time, we are restricting the amount of dogs that we currently accept with aggressive behavior towards grooming.
                  We will revisit this and update
                </p>
              </div>
            </FlipCard>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Services;