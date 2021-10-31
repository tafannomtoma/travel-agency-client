import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'



const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://gory-treat-72238.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);

    const handleDelete = id => {
        const url = `https://gory-treat-72238.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = myOrders.filter(order => order._id !== id);
                    setMyOrders(remaining);
                }
            })
    }


    const myAllOrders = myOrders.filter(order => order.email == user?.email)
    console.log(myAllOrders);

    return (
        <div>
            <h1> My Order</h1>
            <div className="my-order">
                {
                    myAllOrders.map(bookedOrder => <div className="bg-secondary p-3 m-5 text-white"
                        key={bookedOrder._id}
                    >

                        <h4>{bookedOrder.Name}</h4>
                        <h4>{bookedOrder.email}</h4>
                        <h5>{bookedOrder.Number}</h5>
                        <h5>{bookedOrder.Adress}</h5>
                        <button onClick={() => handleDelete(bookedOrder._id)}>Delete</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;