import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className="hero max-w-5xl mx-auto my-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='w-full lg:w-1/2 pl-16'>
                    <h1 className="text-5xl font-bold capitalize">Exceptional dental care, on your terms</h1>
                    <p className="py-6">Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;