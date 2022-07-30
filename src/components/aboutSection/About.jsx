import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex justify-center items-center gap-14 mt-[50rem] lg:mt-32'>
            <div className='text-center'>
                <h3 className='font-black text-2xl md:text-4xl border-8 border-main p-3 rounded-full'>1+</h3>
                <p> years <br/> <span className='text-main text-lg font-bold'>Experience</span> </p>
            </div>

            <div className='text-center'>
                <h3 className='font-black text-2xl md:text-4xl border-8 border-main p-3 rounded-full'>10+</h3>
                <p> Completed <br/> <span className='text-main text-lg font-bold'>Projects</span> </p>
            </div>

            <div className='text-center'>
                <h3 className='font-black text-2xl md:text-4xl border-8 border-main p-3 rounded-full'>1+</h3>
                <p> Internship <br/> <span className='text-main text-lg font-bold'>Work</span> </p>
            </div>
    </section>
  )
}

export default About;
