import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://gory-treat-72238.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
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
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div id="manageAllOrders">
            <h2>This is Manage All Orders</h2>
            <div className=" manage-order">
                {
                    orders.map(order => <div className="p-3 m-3 bg-warning"

                        key={order._id}>

                        <h3>Name:{order.Name}</h3>
                        <h5>{order.price}</h5>
                        <h5>Email:{order.email}</h5>
                        <h5>Adress:{order.Adress}</h5>
                        <h5>Contact:{order.Number}</h5>




                        <button onClick={() => handleDelete(order._id)}>Delete</button>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ManageAllOrders;