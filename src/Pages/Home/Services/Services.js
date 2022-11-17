import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import fluoride from '../../../assets/images/fluoride.png';

const Services = () => {
    return (
        <div className='my-16'>
            <div className='text-center'>
                <h1 className='text-secondary font-bold uppercase text-lg mb-2'>Our Services</h1>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>

            <div className='p-4 my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <InfoCard name='Fluoride Treatment' bgColor='base-100' icon={fluoride} text='Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.' textAlign="text-center" textColor="text-neutral"></InfoCard>

                <InfoCard name='Cavity Filling' bgColor='base-100' icon={cavity} text=' A dental filling treats tooth decay. Having a filling can prevent further damage.' textAlign="text-center" textColor="text-neutral"></InfoCard>

                <InfoCard name='Teeth Whitening' bgColor='base-100' icon={whitening} text='Teeth Whitening is a quick and painless in-office whitening system.' textAlign="text-center" textColor="text-neutral"></InfoCard>
            </div>
        </div>
    );
};

export default Services;