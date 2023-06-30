import "./Footer.scss";
import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Beatles is a consumer electronics brand specialising in designing and manufacturing
                audio products such as headphones, earphones, speakers, and home audio.
                Founded in 2015 and based in India, Beatles products are known for their 
                stylish designs and impeccable sound quality.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                    Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 9999999991</div>
                </div>
                <div className="c-item">
                    < FaEnvelope />
                    <div className="text">Email: store@jsdev.com </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphone </span>
                <span className="text">Smart Watches </span>
                <span className="text">Bluetooth Speaker </span>
                <span className="text">Wireless Earbuds </span>
                <span className="text">Home Theatre </span>
                <span className="text">Projector </span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home </span>
                <span className="text">About </span>
                <span className="text">Privacy Policy </span>
                <span className="text">Return</span>
                <span className="text">Terms & Condition </span>
                <span className="text">Contact Us </span>
            </div> 
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                Beatles Store. 2023 Created BY Saurabh. PREMIUM E-COMMERCE SOLUTION.
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>;
};

export default Footer;
