import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card, ImageHeader, CardBody } from "react-simple-card";
import Modal from "react-responsive-modal";
import Afton from "../../components/img/afton-profile-pic.png";
import Marcy from "../../components/img/marcy-profile-pic.png";
import Jenny from "../../components/img/jenny-profile-pic.png";
import Norma from "../../components/img/norma-profile-pic.png";
import "./Staff.css";

class Staff extends Component {

  componentDidMount() {
    document.title = "Bark Avenue | Stylists"
  };

  state = {
    open1: false,
    open2: false,
    open3: false,
    open4: false,
  };

  onOpenModal1 = () => {
    this.setState({ open1: true });
  };

  onCloseModal1 = () => {
    this.setState({ open1: false });
  };

  onOpenModal2 = () => {
    this.setState({ open2: true });
  };

  onCloseModal2 = () => {
    this.setState({ open2: false });
  };

  onOpenModal3 = () => {
    this.setState({ open3: true });
  };

  onCloseModal3 = () => {
    this.setState({ open3: false });
  };

  onOpenModal4 = () => {
    this.setState({ open4: true });
  };

  onCloseModal4 = () => {
    this.setState({ open4: false });
  };

  render() {
    const { open1, open2, open3, open4 } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
          </Col>
          <Col size="md-4">
            <h1>
              Meet Our Stylists
            </h1>
            <h6>
              Click Stylist Name Below For More Details
            </h6>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col size="md-1">
          </Col>
          <Col size="md-4">
            <Card>
              <ImageHeader imageSrc={Afton} alt="Afton"/>
              <CardBody>
                <button className="btn btn-light" onClick={this.onOpenModal1}>
                  Afton
                </button>{' '}
                <Modal
                  open={open1}
                  onClose={this.onCloseModal1}
                  center
                  classNames={{
                    transitionEnter: 'transition-enter',
                    transitionEnterActive: 'transition-enter-active',
                    transitionExit: 'transition-exit-active',
                    transitionExitActive: 'transition-exit-active',
                  }}
                  animationDuration={1000}
                >
                  <img src={Afton} alt="Afton" class="center" />
                  <h4 class="modalBioh4">
                    Afton - Owner/Master Pet Stylist
                  </h4>
                  <p class="modalBiop">
                    <strong>Specialties:</strong>
                  <br />
                    Schnauzers, Puppies, Hand Scissor Trims, Rare Breeds, Large Double-Coated Breeds
                  </p>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col size="md-1">
          </Col>
          <Col size="md-4">
            <Card>
              <ImageHeader imageSrc={Marcy} alt="Marcy" />
              <CardBody>
                <button className="btn btn-light" onClick={this.onOpenModal2}>
                  Marcy
                </button>{' '}
                <Modal
                  open={open2}
                  onClose={this.onCloseModal2}
                  center
                  classNames={{
                    transitionEnter: 'transition-enter',
                    transitionEnterActive: 'transition-enter-active',
                    transitionExit: 'transition-exit-active',
                    transitionExitActive: 'transition-exit-active',
                  }}
                  animationDuration={1000}
                >
                  <img src={Marcy} alt="Marcy" class="center" />
                  <h4 class="modalBioh4">
                    Marcy - Stylist
                  </h4>
                  <p class="modalBiop">
                    <strong>Specialties:</strong>
                  <br />
                    Golden Retrievers, Doodles, Fearful Pets, Puppy Mill Rescues, Express Grooms, King Charles Cavalier Spaniels
                  </p>
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-1">
          </Col>
          <Col size="md-4">
            <Card>
              <ImageHeader imageSrc={Jenny} alt="Jenny" />
              <CardBody>
                <button className="btn btn-light" onClick={this.onOpenModal3}>
                  Jenny
                </button>{' '}
                <Modal
                  open={open3}
                  onClose={this.onCloseModal3}
                  center
                  classNames={{
                    transitionEnter: 'transition-enter',
                    transitionEnterActive: 'transition-enter-active',
                    transitionExit: 'transition-exit-active',
                    transitionExitActive: 'transition-exit-active',
                  }}
                  animationDuration={1000}
                >
                  <img src={Jenny} alt="Jenny" class="center" />
                  <h4 class="modalBioh4">
                    Jenny - Stylist
                  </h4>
                  <p class="modalBiop">
                    <strong>Specialties:</strong>
                  <br />
                    Shih Tzus, Westies, Anxious Dogs, RAGOM Foster Dogs, Special Needs Dogs
                  </p>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col size="md-1">
          </Col>
          <Col size="md-4">
            <Card>
              <ImageHeader imageSrc={Norma} alt="Norma" />
              <CardBody>
                <button className="btn btn-light" onClick={this.onOpenModal4}>
                  Norma
                </button>{' '}
                <Modal
                  open={open4}
                  onClose={this.onCloseModal4}
                  center
                  classNames={{
                    transitionEnter: 'transition-enter',
                    transitionEnterActive: 'transition-enter-active',
                    transitionExit: 'transition-exit-active',
                    transitionExitActive: 'transition-exit-active',
                  }}
                  animationDuration={1000}
                >
                  <img src={Norma} alt="Norma" class="center" />
                  <h4 class="modalBioh4">
                    Norma - Shop Dog
                  </h4>
                  <p class="modalBiop">
                    <strong>Specialties:</strong>
                  <br />
                    Begging for treats, Greeting customers, Napping, Hopefully more treats
                  </p>
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }

}


export default Staff;