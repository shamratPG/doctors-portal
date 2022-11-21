import React, { useState } from 'react';
import CalendarHero from './CalendarHero/CalendarHero';

const AppointmentPage = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <CalendarHero
                selected={selected}
                setSelected={setSelected}
            ></CalendarHero>

        </div>
    );
};

export default AppointmentPage;