import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div>
      <h1 className="text-center text-primary mb-4 mt-3 pb-2 shadow-sm border-bottom">Book Your Appointment</h1>
      <Container className="mb-3">
        <Row>
          <Col xs={12} md={6}>
            <div className="img-style text-center">
              <img
                className="w-75"
                src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/03/img-booking.png"
                alt=""
              />
            </div>
          </Col>
          <Col xs={12} md={6}  className='d-flex justify-content-center align-items-center'>
            <div  className="form-container">
            <Form>
                <div className="text-center">
                    <img className="w-50" src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2019/12/denticare-logo.png" alt="" />
                </div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Control type="number" placeholder="Appointment Date" />
              </Form.Group>
              <button className="btn-style  mx-auto d-block" type="submit">Book Appointment Now</button>
            </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
