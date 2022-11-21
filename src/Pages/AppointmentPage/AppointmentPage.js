import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import CalendarHero from './CalendarHero/CalendarHero';

const AppointmentPage = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <CalendarHero
                selected={selected}
                setSelected={setSelected}
            ></CalendarHero>
            <AvailableAppointment
                selected={selected}
            ></AvailableAppointment>
        </div>
    );
};

export default AppointmentPage;