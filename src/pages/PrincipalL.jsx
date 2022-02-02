import Info from 'components/Info';
import Skill from 'components/Skill';
import React from 'react';
import datos from 'datos/datos.json';
import Language from 'components/Language';
import Contact from 'components/Contact';
import Interests from 'components/Interests';

const PrincipalL = () => (
  <div className='flex flex-col px-20 py-1 items-center'>
    <div>
      <Info />
    </div>
    <div>
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
    <div>
      <Language titulo={datos.languages.titulo} />
      <h1>{datos.languages.l1}</h1>
      <h1>{datos.languages.l2}</h1>
    </div>
    <div>
      <Contact titulo={datos.contact.titulo} />
      <h1>{datos.contact.c1}</h1>
      <h1>{datos.contact.dc1}</h1>
      <h1>{datos.contact.c2}</h1>
      <h1>{datos.contact.dc2}</h1>
    </div>
    <div>
      <Interests />
    </div>
  </div>
);

export default PrincipalL;
