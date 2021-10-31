import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css'
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://gory-treat-72238.herokuapp.com/order', data)
            .then(res => {
                if (res.data.inserted) {
                    alert('added successfully')
                    reset();
                }
            })
    }

    const { serviceId } = useParams();
    const [servicesDetails, setServicesDetails] = useState({});
    // const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch(`https://gory-treat-72238.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServicesDetails(data))
    }, [])

    // useEffect(() => {
    //     const foundService = servicesDetails.find(service => service.id == serviceId)
    //     setSingleService(foundService)
    // }, [servicesDetails]);

    return (
        <div className="booking-container m-3">

            <div className="booking-page m-3 px-5">
                <h3>Book Here:{serviceId}</h3>

                <img className="w-100" src={servicesDetails.img} alt="" />
                <h3>{servicesDetails.Name}</h3>

                <h4>Cost:{servicesDetails.price}</h4>
                <p>Know More:{servicesDetails.description}</p>

            </div>

            <div classname="booking-info">
                <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-2" {...register("Name")} value={user?.displayName} />
                    <br />
                    <input className="my-2" {...register("serviceId")} value={serviceId} />
                    <br />
                    <input className="my-2" {...register("email")} value={user?.email} />
                    <br />
                    <input className="my-2" type="number" {...register("price")} value={servicesDetails.price} />
                    <br />
                    <input className="my-2" {...register("Adress")} placeholder="Adress" />
                    <br />
                    <input className="my-2" {...register("Number")} placeholder="Contact-number" />
                    <br />

                    <input className="my-2" type="number" {...register("person-quantity",)} placeholder="person" />
                    <br />

                    <input className="my-3" type="Submit" />
                </form>
            </div>

        </div>
    );
};

export default Booking;