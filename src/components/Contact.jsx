import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'fontawesome.js';

const Contact = () => (
  <div className='boxRound px-5 py-5'>
    <h1 className='subtitulo text-ColorNegro font-bold'>Contacto</h1>
    <FontAwesomeIcon
      icon={['fas', 'fa-linkedin']}
      className='text-ColorNegro'
      size='2x'
    />
    <h1 className='subtitulo text-ColorSalmon'>LinkedIn</h1>
    <h1 className='textp text-ColorNegro'>JULIANA CADAVID RAMÍREZ</h1>
    <FontAwesomeIcon
      icon={['fas', 'fa-github']}
      className='text-ColorNegro'
      size='2x'
    />
    <h1 className='subtitulo text-ColorSalmon'>Github</h1>
    <h1 className='textp text-ColorNegro'>Juliana Cadavid</h1>
  </div>
);

export default Contact;
