import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    const bgStyle = {
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'

    }
    return (
        <footer style={bgStyle} className="footer flex flex-col items-center p-10 py-20 text-base-content">
            <div className='w-full flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col '>
                    <span className="footer-title mb-3">Services</span>
                    <Link className="link link-hover mb-2 text-accent">Emergency Checkup</Link>
                    <Link className="link link-hover mb-2 text-accent">Monthly Checkup</Link>
                    <Link className="link link-hover mb-2 text-accent">Emergency Checkup</Link>
                    <Link className="link link-hover mb-2 text-accent">Weekly Checkup</Link>
                    <Link className="link link-hover mb-2 text-accent">Deep Checkup</Link>
                </div>
                <div className='flex flex-col my-8 md:my-0'>
                    <span className="footer-title mb-3">Oral Health</span>
                    <Link className="link link-hover mb-2 text-accent">Fluoride Treatment</Link>
                    <Link className="link link-hover mb-2 text-accent">Cavity Filling</Link>
                    <Link className="link link-hover mb-2 text-accent">Teeth Whitening</Link>
                </div>
                <div className='flex flex-col'>
                    <span className="footer-title mb-3">Our Address</span>
                    <Link className="link link-hover mb-2 text-accent">1785 Wari, East Fulbaria, Dhaka-1239</Link>
                </div>
            </div>
            <div className='relative top-8'>
                <p className='font-semibold'>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;