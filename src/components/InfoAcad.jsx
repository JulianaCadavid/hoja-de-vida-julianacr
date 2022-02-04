import React from 'react';

const InfoAcad = ({ titulo }) => (
  <div className='boxRound px-5 py-5'>
    <h1 className='subtitulo text-ColorAzul font-family'>{titulo}</h1>
    <h1 className='subtitulo text-ColorNegro font-family'>
      INGENIERÍA DE SISTEMAS / UNIVERSIDAD DE ANTIOQUIA
    </h1>
    <h1 className='texto text-ColorNegro font-family'>2017-Actualidad.</h1>
    <h1 className='subtitulo text-ColorNegro font-family'>
      BACHILLER / UNIDAD EDUCATIVA SAN MARCOS
    </h1>
    <h1 className='texto text-ColorNegro font-family'>2012-2016.</h1>
    <h1 className='subtitulo text-ColorNegro font-family'>
      PRIMARIA/ INSTITUCIÓN EDUCATIVA LA SALLE DE BELLO
    </h1>
    <h1 className='texto text-ColorNegro font-family'>2004-2012.</h1>
  </div>
);

export default InfoAcad;
