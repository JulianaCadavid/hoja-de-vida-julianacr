import React from 'react';

const Language = ({ titulo, l1, l2 }) => (
  <div className='text-center'>
    <h1 className='subtitulo text-ColorNegro'>{titulo}</h1>
    <h1 className='texto text-ColorNegro'>{l1}</h1>
    <h1 className='texto text-ColorNegro'>{l2}</h1>
  </div>
);

export default Language;
