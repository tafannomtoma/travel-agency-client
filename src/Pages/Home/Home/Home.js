import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>

            <Services></Services>

        </div>
    );
};

export default Home;