import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggle = ()=>{
        setOpenMenu(!openMenu);
    }
    return (
        <div className='w-full bg-[#F9F8FF] relative'>
            <nav className='flex justify-between items-center py-4 mx-auto px-5 md:px-16 w-full absolute top-0 z-10 '>
                <Link to="/"><h1 className='text-2xl md:text-3xl font-mono font-bold primary-color'>Career<span className='secondary-color'>Zone</span></h1></Link>
                <XMarkIcon className={`icon ${openMenu ? '' : 'hidden'}`} onClick={toggle}></XMarkIcon>
                <Bars3BottomRightIcon className={`icon ${openMenu ? 'hidden' : ''} md:hidden`}  onClick={toggle}></Bars3BottomRightIcon>
                <div className={openMenu ? 'absolute flex flex-col top-12 bg-slate-200 p-5 rounded-md right-8' : 'w-[60%] md:flex justify-between items-center hidden'}>
                    <ul className={`flex gap-3 md:gap-7 text-base font-semibold ${openMenu ? 'flex-col w-fit' : ''}`}>
                        <NavLink to='/' className={({isActive})=> (isActive ? 'isActive' : '')}>Home</NavLink>
                        <NavLink to='/statistics' className={({isActive})=> (isActive ? 'isActive' : '')}>Statistics</NavLink>
                        <NavLink to='/appliedJobs' className={({isActive})=> (isActive ? 'isActive' : '')}>Applied jobs</NavLink>
                        <NavLink to='/blogs' className={({isActive})=> (isActive ? 'isActive' : '')}>Blogs</NavLink>
                    </ul>
                    <Link to='/apply'><button className='primary-btn mt-5 md:mt-0'>Start Apply</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;