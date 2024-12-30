import React from 'react'
import Sidebar from './Sidebar';

const Layout = ({ children } ) => {
  return (
    <div className="relative min-h-screen w-screen text-white">
        <div className='w-full bg-gray-700 p-6 md:fixed md:top-0 md:left-0 md:h-screen md:w-[40%]'>
            <Sidebar />
        </div>
     
        <main className='bg-gray-800 p-6 min-h-screen md:h-screen md:overflow-y-auto md:ml-[40%]'>
            {children}
        </main>
    </div>
  );
};


export default Layout