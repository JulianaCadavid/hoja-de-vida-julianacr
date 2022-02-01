import React from 'react';
import foto from 'datos/foto.png';
import datos from 'datos/datos.json';
import Profile from 'components/Profile';
import InfoAcad from 'components/InfoAcad';
import InfoLab from 'components/InfoLab';
import Course from 'components/Course';
import Proyectos from 'components/Proyects';

const Principal = () => (
  <div>
    <div className='flex flex-col px-5 py-8  bg-ColorBackground'>
      <div className='flex flex-col md:flex-row  items-center'>
        <img src={foto} alt='Foto perfil' width={200} height={200} />
        <h1 className='flex flex-col font-family text-titulo px-10 py-10'>
          JULIANA CADAVID RAMÍREZ
        </h1>
      </div>
    </div>
    <div className='flex flex-col px-20 py-8 items-center'>
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

export default Principal;
