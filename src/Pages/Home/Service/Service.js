import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {


    const { id, name, description, img } = service;
    return (
        <div>
            <img style={{ height: "300px", width: "400px" }} src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <Button variant="outline-dark">BOOK NOW</Button>
            </Link>

        </div>
    );
};

export default Service;