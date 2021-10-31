import React from 'react';

import Services from '../../Services/Services';
import Activity from '../Activity/Activity';
import Banner from '../Banner/Banner';
import Travel from '../Travel/Travel';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Activity></Activity>
            <Travel></Travel>


        </div>
    );
};

export default Home;