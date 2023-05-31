import React from 'react';

const Category = ({category}) => {
    const {category_logo, category_name, available_jobs} = category;
    return (
        <div className='p-3 md:p-8 rounded-md bg-[#F9F8FF]'>
            <div className='rounded-md p-2 md:p-3 bg-[#EFECFF] w-fit'>
                 <img src={category_logo} alt="" />
            </div>
            <h3 className='title'>{category_name}</h3>
            <p className='subtitle'>{available_jobs} Jobs Available</p>
        </div>
    );
};

export default Category;