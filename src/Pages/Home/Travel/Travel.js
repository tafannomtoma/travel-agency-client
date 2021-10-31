import React from 'react';
import { FaAffiliatetheme, FaAudible, FaCanadianMapleLeaf, FaCreativeCommonsShare } from "react-icons/fa";
import './Travel.css'

const Travel = () => {
    return (
        <div id="discover" className="mt-5">
            <h2>TRAVEL & DISCOVER</h2>
            <div className="travel-container  mt-5">

                <div>
                    <img className="w-100 pt-3 mt-5 pb-5" src="https://i2.wp.com/travelmoments.net/wp-content/uploads/2020/10/Welcome-to-Travel-Moments-Homepage.png?fit=2240%2C1260&ssl=1" alt="" />
                </div>

                <div className="travel-back text-white pt-5 mt-5">
                    <h6>----------callback for more</h6>
                    <h2>GO TRAVEL. DISCOVER. REMEMBER US!!</h2>
                    <p>Biblical Study Trips to Israel with Geoff Carroll. Study the culture and history of the Bible in its context.</p>
                    <div className="stisfeid-client">
                        <div>
                            <h3><FaAffiliatetheme size="3em" />500K+</h3>
                            <h6>Satisfeid Client</h6>
                        </div>
                        <div>
                            <h3><FaAudible size="3em" />409K+</h3>
                            <h6>Satisfeid Client</h6>
                        </div>
                        <div>
                            <h3><FaCanadianMapleLeaf size="3em" />50K+</h3>
                            <h6>Satisfeid Client</h6>
                        </div>
                        <div>
                            <h3><FaCreativeCommonsShare size="3em" />70K+</h3>
                            <h6>Satisfeid Client</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Travel;