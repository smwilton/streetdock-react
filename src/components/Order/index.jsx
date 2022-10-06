import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Heading, Subtitle, TextWrap } from "./OrderElements";
import Image1 from "../../images/hero.png";

const Order = () => {
  return (
    <Container
      style={{
        position: "center",
        marginTop: "100px",
        marginBottom: "50px",
        backgroundColor: "#fff",
      }}
    >
      <TextWrap>
        <Heading>StreetDock Delivery Request Form</Heading>
        <Subtitle>
          Fill in the form below to request a delivery. We will be in touch with
          you as soon as we confirm your order and arrange payment.
        </Subtitle>
      </TextWrap>
      <Form style={{ padding: "50px" }}>
        <Row className="mb-3">
          <h2>Contact Details</h2>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBusinessName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control type="text" placeholder="Business Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Contact number</Form.Label>
            <Form.Control placeholder="Contact Number" />
          </Form.Group>
        </Row>
        <h2>Pick-up location</h2>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Address line 1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control placeholder="Address line 2" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress3">
          <Form.Control placeholder="Address line 3" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPostcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <h2>Drop-off location</h2>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Address line 1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control placeholder="Address line 2" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress3">
          <Form.Control placeholder="Address line 3" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPostcode">
            <Form.Label>Postcode</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <h2>Date and time of pick-up</h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="dob">
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Pick up time" />
          </Form.Group>

          <Form.Group as={Col} controlId="time">
            <Form.Label>Select Preferred Pick-up Time</Form.Label>
            <Form.Control type="time" name="time" placeholder="Pick up time" />
          </Form.Group>
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Order;
