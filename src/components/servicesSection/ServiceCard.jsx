import React from 'react';

const ServiceCard = ({emoji, title, skill, button}) => {
  return (
    <div className='flex flex-col justify-start items-center text-center  border-8 border-main rounded-xl w-[90%] lg:w-60 md:w-[50%] m-auto pb-10 pt-7 mt-10'>
      <img src={emoji} alt='' className='w-24 mb-0' />
      <p className='p-2 text-2xl'>{title}</p>
      <p className='p-0.5'>{skill}</p>
      <button className='btn mt-6 p-0.5'>{button}</button>
    </div>
  )
}

export default ServiceCard;