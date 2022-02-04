import React from 'react';
import PrincipalL from 'pages/PrincipalL';
import PrincipalR from 'pages/PrincipalR';
import Navbar from 'components/Navbar';

const Principal = () => (
  <div className='flex flex-col gap-y-3'>
    <Navbar />
    <div className='xl:flex sm:columns-1'>
      <PrincipalR />
      <PrincipalL />
    </div>
  </div>
);

export default Principal;
