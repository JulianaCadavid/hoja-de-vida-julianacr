import React from 'react';

const InfoLab = ({ titulo }) => (
  <div className='text-center'>
    <h1 className='subtitulo text-ColorAzul'>{titulo}</h1>
    <h1 className='subtitulo text-ColorNegro'>
      FACULTAD DE INGENIERÍA DE SISTEMAS | TUTORÍAS
    </h1>
    <p className='texto text-ColorNegro'>
      Octubre 2021- Actualidad. <br />• Guiar los procesos académicos de otros
      compañeros. <br />• Fortalecer los conocimientos de las personas que lo
      requieran en distintas áreas.
    </p>
    <h1 className='subtitulo text-ColorNegro'>
      PROFESOR DE MATEMÁTICAS | CLASES Y TALLERES
    </h1>
    <p className='texto text-ColorNegro'>
      Octubre 2021- Diciembre 2021. <br />
      •Realización de talleres de materias como matemáticas, inglés, cálculo,
      etc. <br />
      •Exponer saberes a las personas que lo necesitan.
    </p>
  </div>
);

export default InfoLab;
