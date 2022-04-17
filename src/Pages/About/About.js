import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sadek from '../../images/me/sadek.jpg';

const About = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className='text-center'>
                            <img className='w-50 ' src={sadek} alt="" />
                            <h3 className='mt-3'>Sadek Hossain</h3>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <p>
                        Hello,<br />
My name is Sadek Hossain. I recently graduated from Government BL College Khulna. I have been wanting to learn to program for a long time but for various reasons it has not been possible. However, due to my love for programming, I graduated and then enrolled in programming-hero batch five. I spend all day coding and working hard so that I can learn programming better. I have a dream that I will become a skilled programmer and work as a full-stack web developer in a big company. Actually, I want to learn programming I want to know what is inside it I want to understand. Although I have no CSE background in my studies, I am trying hard enough to learn to program but I want to do Phitron CSE Fundamentals course after finishing this course so that I can strengthen my programming knowledge. Lastly, thanks to the programming-hero team for creating such a beautiful learning environment.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;