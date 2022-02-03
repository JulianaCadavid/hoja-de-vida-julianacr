import React from 'react';
import datos from 'datos/datos.json';
import Profile from 'components/Profile';
import InfoAcad from 'components/InfoAcad';
import InfoLab from 'components/InfoLab';
import Course from 'components/Course';
import Proyectos from 'components/Proyects';

const PrincipalR = () => (
  <div className='items-left sm:flex-col'>
    <div className='flex flex-col px-20 m-8 py-1'>
      <Profile titulo={datos.profile.titulo} />
      <p>{datos.profile.descripcion}</p>
    </div>
    <div className='flex flex-col px-20  py-8 m-8'>
      <InfoAcad titulo={datos.infoacad.titulo} />
    </div>
    <div className='flex flex-col px-20 py-8 m-8'>
      <InfoLab titulo={datos.infolab.titulo} />
    </div>
    <div className='flex flex-col px-20 py-8 m-8'>
      <Course titulo={datos.course.titulo} />
      <h1>{datos.course.course1}</h1>
      <h1>{datos.course.course2}</h1>
      <h1>{datos.course.course3}</h1>
      <h1>{datos.course.course4}</h1>
      <h1>{datos.course.course5}</h1>
    </div>
    <div className='flex flex-col px-20 py-8 m-8'>
      <Proyectos titulo={datos.proyects.titulo} />
      <h1>{datos.proyects.p1}</h1>
      <h1>{datos.proyects.p2}</h1>
      <h1>{datos.proyects.p3}</h1>
      <h1>{datos.proyects.p4}</h1>
    </div>
  </div>
);

export default PrincipalR;
