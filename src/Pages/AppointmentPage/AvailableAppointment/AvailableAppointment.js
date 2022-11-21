import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({ selected, setTreatment }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(data => data.json())
            .then(result => {
                setAppointmentOptions(result)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center font-semibold text-secondary'>Available Appointment on {format(selected, 'PP')}</h2>

            <div className='grid gap-6 grid-cols-1 grid-cols-2 grid-cols-3 my-16'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    >
                    </AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;