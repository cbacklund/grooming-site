import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import "./Employee.css";

class Employee extends Component {

    componentDidMount() {
        document.title = "Bark Avenue | Employee"
        this.loadContacts();
    }

    state = {
        contacts: []
    }

    loadContacts = () => {
        API.getContact()
            .then(res =>
                this.setState({ contacts: res.data, name: "", phoneNumber: "", email: "", breed: "", message: "" })
            )
            .catch(err => console.log(err));
    };

    deleteContact = id => {
        API.deleteContact(id)
            .then(res => this.loadContacts())
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getContact()
            .then(res =>
                this.setState({ contacts: res.data, name: "", phoneNumber: "", email: "", breed: "", message: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-4">
                    </Col>
                    <Col size="md-4">
                        <h1>
                            Employee Page
                        </h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col size="md-2">
                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Gather Contact Us
                        </FormBtn>
                    </Col>
                    <Col size="md-1">
                    </Col>
                    <Col size="md-7">
                        <Jumbotron>
                            {this.state.contacts.length ? (
                                <List>
                                    {this.state.contacts.map(found => (
                                        <ListItem key={found._id}>
                                            <strong>Name:</strong> {found.name}
                                            <br />
                                            <strong>Phone Number:</strong> {found.phoneNumber}
                                            <br />
                                            <strong>Email Address:</strong> {found.email}
                                            <br />
                                            <strong>Type of Dog</strong>: {found.breed}
                                            <br />
                                            <strong>Message:</strong> {found.message}
                                            <DeleteBtn onClick={() => this.deleteContact(found._id)} />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <h3>Inbox Is Empty. Click Button To Refresh</h3>
                                )}
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Employee;
