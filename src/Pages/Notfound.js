import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img style={{ width: '600px', height: '75%' }} src="https://lageniusinfo.com/wp-content/uploads/2018/09/404-735x465.png" alt="" />
            <Link to="/"><button className="bg-info">Go Back</button></Link>
        </div>
    );
};

export default Notfound;