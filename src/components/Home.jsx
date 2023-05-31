import React, { useEffect, useState } from 'react';
import logo from '../assets/images/P3OLGJ1 copy 1.png'
import Category from './Category';
import FeaturesAllJobs from './FeaturesAllJobs';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(()=>{
        const loadCategoryData = async()=>{
            const res = await fetch('/category.json');
            const data = await res.json();
            setCategoryData(data);
        }
        loadCategoryData()
    }, [])
    return (
        <div>
            {/* home page banner */}
            <div className=' bg-[#F9F8FF] pt-14 md:pt-[76px]'>
            <div className='w-full max-body grid md:grid-cols-2 pt-2 md:pt-5 md:pl-5'>
                <div className='flex flex-col justify-center order-2 md:order-1'>
                    <h1 className='text-xl md:text-5xl font-extrabold font-serif max-w-[370px]'>One Step Closer To Your <br /> <span className='primary-color'>Dream Job</span></h1>
                     <p className='subtitle md:my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link to='/apply'><button className='primary-btn'>Get Started</button></Link>
                 </div>
                 <div className='order-1 md:order-2 w-full'>
                     <img className='w-[90%] mx-auto md:mx-0 md:ml-auto' src={logo} alt="" />
                </div>
            </div>
            </div>
            {/* Job category list section started */}
            <section className='my-10 md:my-28 max-body'>
                <h1 className='head-title'>Job Category List</h1>
                <p className='subtitle text-center '>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5'>
                    {
                        categoryData?.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </section>
            {/* Featured jobs section started */}
            <FeaturesAllJobs>home</FeaturesAllJobs>
        </div>
    );
};

export default Home;