import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-style">
      <Container>
        <Row>
          <Col xs={12} md={6} className='mt-5 pt-5'>
            <div>
            <div className="part">
            <h2 className="banner-text fw-bold">Committed To Excellence</h2>
            <h1 className=" text-primary fw-bold display-3">Personalized & Comfortable</h1>
            </div>
            <Row className='mt-5'>
              <Col xs={12} md={6}>
                <div>
                  <h4 className="text-primary banner-second-text">Full Protection</h4>
                  <p className="banner-p">Competently Parallel task Researched Data and Process improvements.</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div>
                  <h4 className="text-primary banner-second-text">Complete Service</h4>
                  <p className="banner-p">Collabrotively expedite quality product via client focused results.</p>
                </div>
              </Col>
            </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
