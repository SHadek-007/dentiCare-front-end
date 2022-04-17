import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faPhone,faEnvelope,faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../../images/social-logo/facebook.png';
import twiter from '../../../images/social-logo/twitter.png';
import linkedin from '../../../images/social-logo/linkedin.png';
import github from '../../../images/social-logo/github.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-light'>
            <Container>
                <Row className='footer-style py-4'>
                    <Col sm={12} md={4}>
                        <div className='mx-auto'>
                        <h3>DentiCare</h3>
                        <p><small>A team of dentists working to ensure <br /> you receive the best treatment.</small></p>
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <small>415-205-5550</small> <br />
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <small>emergencies@denticare.com</small> <br />
                        <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon> <small>denticare.com</small> <br />
                        </div> 
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='mx-auto'>
                        <h3>About</h3>
                        <p><small>Our Dental Team</small></p>
                        <p><small>Pricing & Pricelist</small></p>
                        <p><small>Solutions</small></p>
                        <p><small>Dental Services</small></p>
                        <p><small>Clients</small></p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div>
                        <h3>Social Networks</h3>
                        <p><small>Visit DentiCare on these social links <br /> and connect with us. Make sure to <br /> follow our accounts for regular updates.</small></p>
                        <div className='mt-3'>
                            <img className='me-4' src={facebook} alt="" />
                            <img className='ms-3' src={twiter} alt="" />
                            <img className='ms-5' src={linkedin} alt="" />
                            <img className='ms-5' src={github} alt="" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bg-primary'>
                <Container>
                    <Row className='text-white pt-4'>
                        <Col xs={12} md={6}>Copyright &copy; 2022 -denticare.com</Col>
                        <Col xs={12} md={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                            <p className='me-3'>Privacy & Policy</p>
                            <p className='ms-5'>Privacy Center</p>
                            <p className='ms-5'>Cookies</p>
                            <p className='ms-5'>About US</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;