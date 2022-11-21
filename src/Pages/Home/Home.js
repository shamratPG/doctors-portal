import React from 'react';
import Hero from './Hero/Hero';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import Services from './Services/Services';
import Appointment from './Appointment/Appointment';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';



const Home = () => {

    return (
        <div>
            <Hero></Hero>

            {/* Info Card Section  */}
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <InfoCard name='Open Hours' bgColor='bg-gradient-to-r from-secondary to-primary' icon={clock} text='We are Open 24 hours 7 days week. Contact us whenever you want' textAlign="text-left" textColor="text-white"></InfoCard>

                <InfoCard name='Visit our location' bgColor='bg-accent' icon={marker} text='1579, Wari, East Fulbaria, Dhaka-1239.' textAlign="text-left" textColor="text-white"></InfoCard>

                <InfoCard name='Contact us now' bgColor='bg-gradient-to-r from-primary to-secondary' icon={marker} text='+88019983483434 Email: doctors@point.com' textAlign="text-left" textColor="text-white"></InfoCard>
            </div>

            <Services></Services>

            <Appointment></Appointment>

            <Testimonial></Testimonial>

            <Contact></Contact>

        </div>
    );
};

export default Home;