import React from 'react';

const Proyectos = ({ titulo, p1, p2, p3, p4 }) => (
  <div>
    <h1 className='subtitulo text-ColorAzul'>{titulo}</h1>
    <h1 className='text text-ColorNegro'>{p1}</h1>
    <h1 className='text text-ColorNegro'>{p2}</h1>
    <h1 className='text text-ColorNegro'>{p3}</h1>
    <h1 className='text text-ColorNegro'>{p4}</h1>
  </div>
);

export default Proyectos;
