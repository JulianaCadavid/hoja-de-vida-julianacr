import React from 'react';

const Contact = ({ titulo, c1, dc1, c2, dc2 }) => (
  <div>
    <h1 className='subtitulo text-ColorNegro'>{titulo}</h1>
    <h1 className='subtitulo text-ColorSalmon'>{c1}</h1>
    <h1 className='textp text-ColorNegro'>{dc1}</h1>
    <h1 className='subtitulo text-ColorSalmon'>{c2}</h1>
    <h1 className='textp text-ColorNegro'>{dc2}</h1>
  </div>
);

export default Contact;
