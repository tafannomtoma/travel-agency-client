import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer ">
            <div className="footer-container pt-5">
                <div>
                    <h5>About Us</h5>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.</p>
                </div>
                <div>
                    <h5>Quick Links</h5>
                    <li>How we are</li>
                    <li>Terms and condition</li>
                    <li>Privacy</li>
                    <li>our Awrads</li>
                    <li>professional</li>
                </div>
                <div>
                    <h5>Promotion</h5>
                    <p>Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                    <button>Subscribe</button>
                    <button>Google sign In</button>
                </div>
                <div>
                    <h5> Get In Touch</h5>
                    <h6>Clinic Adress</h6>
                    <h6>Call Center</h6>
                    <h6>Mail adress</h6>

                </div>
            </div>
            <hr />
            <p className="pt-3 pb-3 text-white">© 2021 Your Company. By Unitemplates</p>


        </div>

    );
};

export default Footer;