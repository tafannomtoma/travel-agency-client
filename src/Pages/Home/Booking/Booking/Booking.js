import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {


    const { serviceId } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServicesDetails(data.service))
    }, [])

    useEffect(() => {
        const foundService = servicesDetails.find(service => service.id == serviceId)
        setSingleService(foundService)
    }, [servicesDetails]);

    return (
        <div className="booking-container">

            <div className="booking-page m-5 px-5">
                <h3>Book Here</h3>
                <img src={singleService?.img} alt="" />
                <h3>{singleService?.name}</h3>
                <h4>{singleService?.plan}</h4>
                <h4>{singleService?.price}</h4>
                <p>{singleService?.detail}</p>
            </div>
        </div>
    );
};

export default Booking;