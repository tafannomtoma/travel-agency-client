import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gory-treat-72238.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));


    }, [])
    return (
        <div id="services mt-5">
            <h2>Our Services</h2>
            <div className="service-container">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;