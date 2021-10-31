import React from 'react';
import { HiLightBulb, HiOutlineChip, HiOutlineUserGroup, HiOutlineZoomIn, HiPresentationChartLine } from "react-icons/hi";
import { Gi3DStairs } from "react-icons/gi";
import './Activity.css';

const Activity = () => {
    return (
        <div id="activity" >
            <div className="mt-5 pb-5">
                <h2>ADVENTURE & ACTIVITY</h2>
                <p className="text-center">Explore is a verb that means "to travel in or through." You might explore an island, a European city, or the rooms of an unfamiliar house.</p>
                <div className="activity-container mt-5">
                    <div className="activity-offer">
                        <HiPresentationChartLine size="6em" color="	#4000ff" />
                        <h5>Adventure</h5>
                        <p>15 Destination</p>
                    </div>
                    <div className="activity-offer">
                        <Gi3DStairs size="6em" color="	#4000ff" />
                        <h5>Trekking</h5>
                        <p>12 Destination</p>

                    </div>
                    <div className="activity-offer">
                        <HiLightBulb size="6em" color="	#4000ff" />
                        <h5>CampFire</h5>
                        <p>7 Destination</p>
                    </div>

                    <div className="activity-offer">
                        <HiOutlineChip size="6em" color="	#4000ff" />
                        <h5>OffRoad</h5>
                        <p>18 Destination</p>
                    </div>
                    <div className="activity-offer">
                        <HiOutlineUserGroup size="6em" color="	#4000ff" />
                        <h5>Camping</h5>
                        <p>12 Destination</p>
                    </div>
                    <div className="activity-offer">
                        <HiOutlineZoomIn size="6em" color="	#4000ff" />
                        <h5>Exploring</h5>
                        <p>10 Destination</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;