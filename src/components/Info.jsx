import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'fontawesome.js';

const Info = () => (
  <div className='boxRound px-5 py-5'>
    <h1 className='subtitulo text-ColorNegro font-bold'>INFO</h1>
    <div className='flex flex-col'>
      <h1 className='subtitulo text-ColorSalmon'>Ubicación</h1>
      <div className='flex'>
        <FontAwesomeIcon
          icon={['fas', 'fa-map-marker-alt']}
          className='text-ColorNegro'
          size='2x'
        />
        <h1 className='texto text-ColorNegro'>Medellín, Colombia</h1>
      </div>
    </div>
    <div>
      <FontAwesomeIcon
        icon={['fas', 'fa-phone-alt']}
        className='text-ColorNegro'
        size='2x'
      />
      <h1 className='subtitulo text-ColorSalmon'>Contacto</h1>
      <div>
        <h1 className='texto text-ColorNegro'>+57 3014072054</h1>
      </div>
    </div>
    <div>
      <h1 className='subtitulo text-ColorSalmon'>Correo</h1>
      <div>
        <FontAwesomeIcon
          icon={['fas', 'fa-envelope']}
          className='text-ColorNegro'
          size='2x'
        />
        <h1 className='texto text-ColorNegro'>
          julicadaramimedellin@gmail.com
        </h1>
      </div>
    </div>
  </div>
);
export default Info;
