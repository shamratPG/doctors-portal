import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name: treatment, slots } = option

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-lg font-bold text-secondary">{treatment}</h2>
                <p className='text-center font-semibold'>{slots[0]}</p>
                <p className='text-center'>{slots.length} Space available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(option)} htmlFor="appointment-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"> Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;