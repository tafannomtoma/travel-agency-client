import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://gory-treat-72238.herokuapp.com/services', data)
            .then(res => {
                if (res.data.inserted) {
                    alert('added successfully')
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>this is add services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description",)} placeholder="description" />
                <input type="number" {...register("price",)} placeholder="price" />
                <input {...register("img",)} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;