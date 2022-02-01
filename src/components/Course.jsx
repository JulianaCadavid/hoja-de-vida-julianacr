import React from 'react';

const Course = ({ titulo, course1, course2, course3, course4, course5 }) => (
  <div className='text-center'>
    <h1 className='subtitulo text-ColorAzul'>{titulo}</h1>
    <h1 className='text text-ColorNegro'>{course1}</h1>
    <h1 className='text text-ColorNegro'>{course2}</h1>
    <h1 className='text text-ColorNegro'>{course3}</h1>
    <h1 className='text text-ColorNegro'>{course4}</h1>
    <h1 className='text text-ColorNegro'>{course5}</h1>
  </div>
);

export default Course;
