import React from 'react'
import geekinate from '../assets/geekinate.svg'
import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
  return (
   <>
   <div className="about flex flex-col items-center justify-center gap-[20px] sm:flex-row">
    <div className="box h-auto w-[70%] sm:w-[45%] " data-aos="zoom-in-down" data-aos-duration="2000"><img className="h-full w-full" src={geekinate} alt="" /></div>
    <div className="box h-auto w-[90%] sm:w-[45%] ">
        <h2 className="font-bold text-[30px] pt-12"  data-aos="fade-up">
Who we are?</h2> 
<p  data-aos="fade-up" data-aos-duration="2000">We are a team of geeks that provides exceptional technology solutions to businesses, startups, and enterprises.</p><br />
<p  data-aos="fade-up" data-aos-duration="2000">Our vision is to spread the power of technology across the globe and help businesses grow by delivering innovative software solutions.</p><br />
<p  data-aos="fade-up" data-aos-duration="2000">Following are the top priorities for us at <span className='text-green-400'>Geekinate</span> with an aim to build long term successful business relationships with our clients.</p><br /><br />
<p className='flex items-center' data-aos="fade-left" data-aos-duration="2000"><FaRegCheckCircle className='text-green-500 text-2xl' /> <p>Quality</p></p><br />
<p className='flex items-center' data-aos="fade-left" data-aos-duration="2000"><FaRegCheckCircle className='text-green-500 text-2xl' /> <p>Customer Satisfaction</p></p><br />
<p className='flex items-center' data-aos="fade-left" data-aos-duration="2000"><FaRegCheckCircle className='text-green-500 text-2xl' /> <p>Efficient Communication</p></p><br />
<p className='flex items-center' data-aos="fade-left" data-aos-duration="2000"><FaRegCheckCircle className='text-green-500 text-2xl' /> <p>Professional Services & Support</p></p>


</div>
   </div><br /><br /><br />
   </>
  )
}

export default About