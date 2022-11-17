import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png'

const Appointment = () => {
    const backgroundStyle = {
        backgroundImage: `url(${appointment})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className='my-16 mt-32' style={backgroundStyle}>
            <div className="hero max-w-5xl mx-auto my-12 text-white relative py-12 lg:py-16">
                <img src={doctor} className="hidden lg:block w-full lg:w-1/2 rounded-lg absolute -top-[150px] left-0" alt='' />
                <div className='w-full lg:w-1/2 pl-4 lg:pl-16 relative lg:justify-self-end'>
                    <h1 className="text-lg text-secondary mb-4 font-bold capitalize">Appointment</h1>
                    <h1 className="text-3xl font-bold capitalize">Make an appointment Today</h1>
                    <p className="py-6">A reasonable goal is to visit the dentist at least once a year for an oral health checkup, although some evidence suggests that those at a low risk for disease may extend to 18-24 months.Maintaining high standards for your dental health.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;