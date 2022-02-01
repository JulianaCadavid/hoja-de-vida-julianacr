import React from 'react';
import foto from 'data/foto.png';
// import data from 'data/data.json';
// import Profile from 'components/Profile';

const Principal = () => (
  <div>
    <div className='flex flex-col px-5 py-8  bg-ColorBackground'>
      <div className='flex flex-col md:flex-row  items-center'>
        <img src={foto} alt='Foto perfil' width={200} height={200} />
        <h1 className='flex flex-col font-family text-titulo px-10 py-10'>
          JULIANA CADAVID RAMÍREZ
        </h1>
      </div>
    </div>
    {/* <div>
      <Profile titulo='Perfil' />
      <p className='texto text-center'>Hola</p>
    </div> */}
  </div>
);

export default Principal;
