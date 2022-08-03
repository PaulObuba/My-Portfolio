import React, {useEffect} from 'react';

import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id='about' className='flex justify-center items-center gap-14 md:mt-0 mt-16'>
            <div className='text-center' data-aos="zoom-in" data-aos-duration="500">
                <h3 className='font-black text-2xl md:text-4xl border-8 border-main p-3 rounded-full'>1+</h3>
                <p> years <br/> <span className='text-main text-lg font-bold'>Experience</span> </p>
            </div>

            <div className='text-center' data-aos="zoom-in" data-aos-duration="900">
                <h3 className='font-black text-2xl md:text-4xl border-8 border-main p-3 rounded-full'>10+</h3>
                <p> Completed <br/> <span className='text-main text-lg font-bold'>Projects</span> </p>
            </div>

            <div className='text-center' data-aos="zoom-in" data-aos-duration="1300">
                <h3 className='font-black text-2xl md:text-4xl border-8 border-main p-3 rounded-full'>1+</h3>
                <p> Internship <br/> <span className='text-main text-lg font-bold'>Work</span> </p>
            </div>
    </div>
  )
}

export default About;
