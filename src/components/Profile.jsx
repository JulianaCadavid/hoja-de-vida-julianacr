import React from 'react';

const Profile = ({ titulo, descripcion }) => (
  <div className='text-center'>
    <h1 className='subtitulo text-ColorAzul font-medium font-family'>
      {titulo}
    </h1>
    <p className='texto text-center text-ColorNegro font-family'>
      {descripcion}
    </p>
  </div>
);

export default Profile;
