import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DoctorIdentity = () => {
    return (
        <div className='mb-5'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className='text-center'>
                            <img className='w-50' src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/doctor.png" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='d-flex align-items-center mt-4'>
                        <div>
                            <h1 className='text-primary'>Edwin Southgate</h1>
                            <h5>Pediatric Dentist</h5>
                            <p>Objectively integrate enterprise-wide strategic theme areas with good infrastructures. Interactively productize premium technologies.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorIdentity;