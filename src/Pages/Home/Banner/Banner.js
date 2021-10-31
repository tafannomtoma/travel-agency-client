import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100  img-banner"
                        src="https://www.slidesalad.com/wp-content/uploads/2017/02/slide_002-6.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="font-weight: bold">TRAVELLING AROUND THE WORLD</h1>
                        <p>Charming castles or serene spa towns? One life is not enough to explore</p>
                        <Button variant="outline-light">CONTINUE READING</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-banner"
                        src="https://www.slidesalad.com/wp-content/uploads/2017/02/slide_001-6.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>EXPERIENCE THE NATURE BEAUTY</h1>
                        <p>Charming castles or serene spa towns? One life is not enough to explore</p>
                        <Button variant="outline-light">CONTINUE READING</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    );
};

export default Banner;