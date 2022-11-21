import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal/AppointmentModal';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import CalendarHero from './CalendarHero/CalendarHero';

const AppointmentPage = () => {
    const [selected, setSelected] = useState(new Date())
    const [treatment, setTreatment] = useState({})
    console.log(treatment)
    return (
        <div>
            <CalendarHero
                selected={selected}
                setSelected={setSelected}
            ></CalendarHero>
            <AvailableAppointment
                selected={selected}
                setTreatment={setTreatment}
            ></AvailableAppointment>
            <AppointmentModal
                treatment={treatment}
                selected={selected}
            ></AppointmentModal>
        </div>
    );
};

export default AppointmentPage;