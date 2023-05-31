import React from 'react';
import banner1 from '../assets/images/Vector.png';
import banner2 from '../assets/images/Vector-1.png';


const HeaderTitle = ({children}) => {
    return (
        <div>
            <div className='w-full bg-[#F9F8FF] min-h-[65vh] relative '>
                <h1 className='absolute top-[50%] left-[40%] md:left-[47%] head-title'>{children}</h1>
                <div className='absolute bottom-0 '>
                    <img src={banner1} alt="" />
                </div>
                <div className='absolute top-0 right-0'>
                    <img src={banner2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderTitle;