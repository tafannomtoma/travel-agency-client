import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {


    const { _id, Name, description, img, price } = service;
    return (
        <div>
            <img style={{ height: "300px", width: "400px" }} src={img} alt="" />
            <h3>{Name}</h3>
            <h5>Price:${price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <Button variant="outline-dark">BOOK NOW</Button>
            </Link>

        </div>
    );
};

export default Service;