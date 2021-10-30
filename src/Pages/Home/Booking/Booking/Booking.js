import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {


    const { serviceId } = useParams();
    const [servicesDetails, setServicesDetails] = useState({});
    // const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServicesDetails(data))
    }, [])

    // useEffect(() => {
    //     const foundService = servicesDetails.find(service => service.id == serviceId)
    //     setSingleService(foundService)
    // }, [servicesDetails]);

    return (
        <div className="booking-container">

            <div className="booking-page m-5 px-5">
                <h3>Book Here:{serviceId}</h3>

                <img src={servicesDetails.img} alt="" />
                <h3>{servicesDetails.Name}</h3>

                <h4>Cost:{servicesDetails.price}</h4>
                <p>Know More:{servicesDetails.description}</p>
                <button>Place order</button>
            </div>
        </div>
    );
};

export default Booking;