import React from 'react';

const AppointmentOption = ({ option }) => {
    const { name: treatment, slots } = option
    console.log(treatment, slots)
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-lg font-bold text-secondary">{treatment}</h2>
                <p className='text-center font-semibold'>{slots[0]}</p>
                <p className='text-center'>{slots.length} Space available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"> Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;