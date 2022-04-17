import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const {id, name, picture, des, price } = service;
  const navigate = useNavigate();
    const navigateToServiceDetails = id =>{
        navigate('/checkout')
    }
  return (
    <Col className="mb-5">
      <Card className="h-100 shadow">
        <Card.Img className="" variant="top" src={picture} />
        <Card.Body className="card-style text-white">
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text><small>{des}</small></Card.Text>
        </Card.Body>
        <button onClick={()=>navigateToServiceDetails(id)} className='btn btn-primary'>Book Now</button>
      </Card>
    </Col>
  );
};

export default Service;
