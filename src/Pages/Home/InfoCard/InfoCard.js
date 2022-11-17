import React from 'react';

const InfoCard = (props) => {
    const { name, bgColor, icon, text, textAlign, textColor } = props;
    return (
        <div className={`card shadow-xl ${bgColor} mb-4 ${textColor} p-4 col`}>
            <div>
                <div className='h-28 flex justify-center items-center'>
                    <img className='h-24 w-24' src={icon} />
                </div>
                <div className={`my-4 ${textAlign}`}>
                    <h2 className="mb-2 font-bold text-xl">{name}</h2>
                    <p >{text}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;