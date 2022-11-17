import React from 'react';
import chair from '../../../assets/images/chair.png';
import backgroundImage from '../../../assets/images/bg.png';

const Hero = () => {
    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="hero pb-12 " style={backgroundStyles}>
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;