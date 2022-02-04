import React from 'react';
import datos from 'datos/datos.json';
import Profile from 'components/Profile';
import InfoAcad from 'components/InfoAcad';
import InfoLab from 'components/InfoLab';
import Course from 'components/Course';
import Proyectos from 'components/Proyects';

const PrincipalR = () => (
  <div className='items-left sm:columns-1'>
    <div className='m-8'>
      <Profile />
    </div>
    <div className='py-8 m-8'>
      <InfoAcad titulo={datos.infoacad.titulo} />
    </div>
    <div className='m-8'>
      <InfoLab titulo={datos.infolab.titulo} />
    </div>
    <div className=' m-8'>
      <Course />
    </div>
    <div className=' m-8'>
      <Proyectos />
    </div>
  </div>
);

export default PrincipalR;
