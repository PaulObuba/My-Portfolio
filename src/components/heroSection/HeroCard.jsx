import React from 'react'

const HeroCard = ({image, text1, text2}) => {
  return (
    <div className='flex justify-around items-center bg-[#D6FAFF] border-2 border-main rounded-2xl w-48'>
        <img src={image} alt='' className='w-10 h-10'/>
        <div>
            <p> {text1} <br/> {text2} </p>
        </div>
    </div>
  )
}

export default HeroCard;
