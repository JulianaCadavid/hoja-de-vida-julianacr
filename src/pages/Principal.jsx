import React from 'react';
import PrincipalL from 'pages/PrincipalL';
import PrincipalR from 'pages/PrincipalR';
import Navbar from 'components/Navbar';

const Principal = () => (
  <div className='flex flex-col'>
    <Navbar />
    <div className='flex'>
      <PrincipalL />
      <PrincipalR />
    </div>
  </div>
);

export default Principal;
