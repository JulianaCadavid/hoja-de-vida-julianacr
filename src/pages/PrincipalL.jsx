import Info from 'components/Info';
import Skill from 'components/Skill';
import React from 'react';
import Language from 'components/Language';
import Contact from 'components/Contact';
import Interests from 'components/Interests';

const PrincipalL = () => (
  <div className='items-left sm:columns-1'>
    <div className='m-8 '>
      <Info />
    </div>
    <div className='m-8'>
      <Skill />
    </div>
    <div className='m-8'>
      <Language />
    </div>
    <div className='m-8'>
      <Contact />
    </div>
    <div className='m-8'>
      <Interests />
    </div>
  </div>
);

export default PrincipalL;
