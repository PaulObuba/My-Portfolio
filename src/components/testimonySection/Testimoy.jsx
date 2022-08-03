import React from 'react'
import TestimoyCard from './TestimoyCard';

const Testimoy = () => {
  return (
   <section id='testimony' className='text-center md:text-start'>
    <h2 className='md:text-5xl text-4xl m-auto'> My Recent <br/> <span className='text-main'> Projects</span> </h2>
    <TestimoyCard />
   </section>
  )
}

export default Testimoy;
