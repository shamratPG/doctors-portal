import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';

const CalendarHero = ({ selected, setSelected }) => {

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse lg:p-28 lg:my-16">
                <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <DayPicker
                        className='shadow-lg p-2 rounded-lg'
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default CalendarHero;