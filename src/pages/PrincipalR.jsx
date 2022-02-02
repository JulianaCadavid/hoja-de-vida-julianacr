import React from 'react';

import datos from 'datos/datos.json';
import Profile from 'components/Profile';
import InfoAcad from 'components/InfoAcad';
import InfoLab from 'components/InfoLab';
import Course from 'components/Course';
import Proyectos from 'components/Proyects';
// import Navbar from 'components/Navbar';

const PrincipalR = () => (
  <div>
    {/* <div className='flex flex-col px-10 py-8 items-center'>
      <Navbar />
    </div> */}
    <div className='flex flex-col px-20 py-1 items-center'>
      <Profile titulo={datos.profile.titulo} />
      <p>{datos.profile.descripcion}</p>
    </div>
    <div className='flex flex-col px-20 py-8'>
      <InfoAcad titulo={datos.infoacad.titulo} />
    </div>
    <div className='flex flex-col px-20 py-8'>
      <InfoLab titulo={datos.infolab.titulo} />
    </div>
    <div className='flex flex-col px-20 py-8 items-center'>
      <Course titulo={datos.course.titulo} />
      <h1>{datos.course.course1}</h1>
      <h1>{datos.course.course2}</h1>
      <h1>{datos.course.course3}</h1>
      <h1>{datos.course.course4}</h1>
      <h1>{datos.course.course5}</h1>
    </div>
    <div className='flex flex-col px-20 py-8 items-center'>
      <Proyectos titulo={datos.proyects.titulo} />
      <h1>{datos.proyects.p1}</h1>
      <h1>{datos.proyects.p2}</h1>
      <h1>{datos.proyects.p3}</h1>
      <h1>{datos.proyects.p4}</h1>
    </div>
  </div>
);

export default PrincipalR;
