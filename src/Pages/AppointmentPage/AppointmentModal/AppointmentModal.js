import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, selected }) => {
    const { name: treatmentName } = treatment;

    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{treatmentName}</h3>
                    <p className="py-4">{format(selected, 'PP')}</p>
                    <div className="modal-action">
                        <label htmlFor="appointment-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;