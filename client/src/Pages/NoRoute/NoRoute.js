import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Carousel from "nuka-carousel";
import Dog1 from "../../components/img/dogs/harrier-pricing.png"
import Dog2 from "../../components/img/dogs/chihuahuah-short-hair-pricing.png"
import Dog3 from "../../components/img/dogs/affenpinscher-pricing.png"
import Dog4 from "../../components/img/dogs/siberian-husky-pricing-pic.png"
import Dog5 from "../../components/img/dogs/scottish-deerhound-pricing.png"
import "./NoRoute.css";

class NoRoute extends Component {

    componentDidMount() {
        document.title = "404 Page Not Found"
    }

    render() {
        return (
            <Container fluid>
            <Row>
                <Col size="md-2">
                </Col>
                <Col size="md-7">
                <h1>
                    Page Not Found, so look at some dogs!
                </h1>
                </Col>
            </Row>
                <Row>
                    <Col size="md-2">
                    </Col>
                    <Col size="md-8">
                        <Carousel>
                            <img src={Dog1} alt="Dog1" class="image404" />
                            <img src={Dog2} alt="Dog2" class="image404" />
                            <img src={Dog3} alt="Dog3" class="image404" />
                            <img src={Dog4} alt="Dog4" class="image404" />
                            <img src={Dog5} alt="Dog5" class="image404" />
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NoRoute;