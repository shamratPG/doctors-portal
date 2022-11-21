import React from 'react';
import TestimonialCards from '../TestimonialCards/TestimonialCards';
import quote from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className='p-4 my-16'>
            <div className='flex relative'>
                <div>
                    <h2 className='text-lg font-bold text-secondary'>Testimonial</h2>
                    <h3 className='text-3xl capitalize'>What our patient says</h3>
                </div>
                <img className='w-[20%] max-w-[150px] absolute right-0 -top-4' src={quote} alt="" />
            </div>

            {/* Testimonial Cards  */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <TestimonialCards></TestimonialCards>
                <TestimonialCards></TestimonialCards>
                <TestimonialCards></TestimonialCards>
            </div>
        </div>
    );
};

export default Testimonial;