import Info from 'components/Info';
import Skill from 'components/Skill';
import React from 'react';
import datos from 'datos/datos.json';
import Language from 'components/Language';
import Contact from 'components/Contact';
import Interests from 'components/Interests';

const PrincipalL = () => (
  <div className='flex flex-col px-20 py-1 items-left sm:flex'>
    <div className='m-8'>
      <Info />
    </div>
    <div className='m-8'>
      <Skill titulo={datos.skill.titulo} />
      <h1>{datos.skill.h1}</h1>
      <h1>{datos.skill.h2}</h1>
      <h1>{datos.skill.h3}</h1>
      <h1>{datos.skill.h4}</h1>
      <h1>{datos.skill.h5}</h1>
      <h1>{datos.skill.h6}</h1>
      <h1>{datos.skill.h7}</h1>
      <h1>{datos.skill.h8}</h1>
      <h1>{datos.skill.h9}</h1>
    </div>
    <div className='m-8'>
      <Language titulo={datos.languages.titulo} />
      <h1>{datos.languages.l1}</h1>
      <h1>{datos.languages.l2}</h1>
    </div>
    <div className='m-8'>
      <Contact titulo={datos.contact.titulo} />
    </div>
    <div className='m-8'>
      <Interests />
    </div>
  </div>
);

export default PrincipalL;
