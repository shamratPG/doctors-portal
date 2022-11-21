import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    const backgroundStyle = {
        backgroundImage: `url(${appointment})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='py-16' style={backgroundStyle}>
            <div className='text-center mb-8'>
                <h2 className='text-secondary text-lg font-bold'>Contact Us</h2>
                <h3 className='text-3xl capitalize text-white'>stay connected with us</h3>
            </div>
            <form className='text-center'>
                <input type="text" placeholder="Email Address" className="input w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs my-4" />
                <br />
                <textarea className="textarea w-full max-w-xs mb-8" placeholder="Your Message"></textarea>
                <br />
                <button className='btn btn-primary bg-gradient-to-r from-secondary to-primary text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;