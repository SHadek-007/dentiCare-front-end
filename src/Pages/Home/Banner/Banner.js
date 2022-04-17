import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/banner/hero-1.png';
import banner2 from '../../../images/banner/hero-2.jpg';
import banner3 from '../../../images/banner/hero-3.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
            <h3 className="banner-text fw-bold">Committed To Excellence</h3>
          <h1 className="text-primary fw-bold ">Personalized & Comfortable</h1>
          <p className="text-dark">Competently Parallel task Researched Data and Process improvements.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="banner-text fw-bold">Care For Lifetime</h3>
          <h1 className="text-primary fw-bold ">Let Us Brighten Your Smile</h1>
          <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="banner-text fw-bold">Care For Your Smile</h3>
          <h1 className="text-primary fw-bold ">Committed To Excellence</h1>
          <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Banner;
