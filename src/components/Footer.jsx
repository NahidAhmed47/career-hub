import React from 'react';

const Footer = () => {
    return (
        <div className='min-h-[400px] bg-slate-900 w-full text-slate-300 flex justify-center flex-col'>
            <div className='grid grid-cols-2 md:grid-cols-5 max-w-[80%] mx-auto border-b border-slate-400 py-5 gap-5 md:gap-0 justify-items-center'>
                <div className='flex flex-col items-start gap-3 md:gap-4'>
                    <h1 className='head-title'>Career<span className="secondary-color">Zone</span></h1>
                    <p className=''>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img className='w-[100px]' src="https://i.ibb.co/KVJvPzv/Group-9969.png" alt="" />
                </div>
                <div>
                    <h1 className='text-lg font-bold text-white'>Company</h1>
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold text-white'>Products</h1>
                    <p>Prototype</p>
                    <p>Plans & pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold text-white'>Support</h1>
                    <p>Help desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold text-white'>Contract</h1>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className='max-w-[80%] mx-auto w-full flex justify-between my-2'>
                <p className='subtitle'>@2023 CareerZone. All Rights Reserved</p>
                <p className='subtitle'>Powered by CareerZone</p>
            </div>
        </div>
    );
};

export default Footer;