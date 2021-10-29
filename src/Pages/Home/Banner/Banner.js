import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-banner"
                        src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-for-best-places-to-visit-in-July-in-the-world.jpg"
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
                        src="https://www.dubai.com/media/uploads/dubai.com/2010/08/Atlantis%20The%20Palm%20Dubai.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>EXPERIENCE THE NATURE BEAUTY</h1>
                        <p>Charming castles or serene spa towns? One life is not enough to explore</p>
                        <Button variant="outline-light">CONTINUE READING</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100 img-banner"
                        src="https://www.destinasian.com/travel/wp-content/uploads/Krabi-indra-yudhistira-unsplash-Slider.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </>
    );
};

export default Banner;