import React from 'react';

const Skill = ({ titulo, h1, h2, h3, h4, h5, h6, h7, h8, h9 }) => (
  <div>
    <h1 className='subtitulo text-ColorNegro font-bold'>{titulo}</h1>
    <h1 className='texto text-ColorNegro'>{h1}</h1>
    <h1 className='texto text-ColorNegro'>{h2}</h1>
    <h1 className='texto text-ColorNegro'>{h3}</h1>
    <h1 className='texto text-ColorNegro'>{h4}</h1>
    <h1 className='texto text-ColorNegro'>{h5}</h1>
    <h1 className='texto text-ColorNegro'>{h6}</h1>
    <h1 className='texto text-ColorNegro'>{h7}</h1>
    <h1 className='texto text-ColorNegro'>{h8}</h1>
    <h1 className='texto text-ColorNegro'>{h9}</h1>
  </div>
);

export default Skill;
