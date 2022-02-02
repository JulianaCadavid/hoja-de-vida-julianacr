import React from 'react';
import foto from 'datos/foto.png';

const Navbar = () => (
  <div className='flex flex-col px-5 py-8 w-full bg-ColorBackground'>
    <div className='flex flex-col md:flex-row  items-center'>
      <img src={foto} alt='Foto perfil' width={200} height={200} />
      <h1 className='flex flex-col font-family text-titulo px-10 py-10'>
        JULIANA CADAVID RAMÍREZ
      </h1>
    </div>
  </div>
);

export default Navbar;
