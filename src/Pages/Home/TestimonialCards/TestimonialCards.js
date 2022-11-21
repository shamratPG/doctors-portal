import React from 'react';
import people from '../../../assets/images/people1.png'

const TestimonialCards = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className='card-body'>

                <div className="">
                    <p>If the answer is No, you need to become aware of the importance of positive reviews, and our post about positive reviews examples: copy and paste ideas is here to help you.</p>
                </div>
                <div className="flex mt-8">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={people} alt="" />
                        </div>
                    </div>
                    <div className='pl-8'>
                        <h4 className='text-lg font-semibold'>Winson Herry</h4>
                        <p>California</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCards;