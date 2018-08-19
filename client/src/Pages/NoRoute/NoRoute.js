import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Error404 from "../../components/img/404.jpg";
import "./NoRoute.css";

class NoRoute extends Component {

    componentDidMount() {
        document.title = "404 Page Not Found"
    }

    render() {
        return (
            <Container fluid>
            <br />
            <br />
                <Row>
                    <Col size="md-2">
                    </Col>
                    <Col size="md-8">
                        <img id="image404" src={Error404} alt="Error 404" class="center" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NoRoute;