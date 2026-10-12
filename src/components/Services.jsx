import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import { FaLaptop } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";

const Services = () => {
  return (
   <>
   <div className="services ">
    <div className="work flex flex-col items-center justify-center">
        <h1 className="text-[30px] font-bold"  data-aos="fade-up" data-aos-duration="2000">What we do?</h1>
        <p className='text-center'  data-aos="fade-up" data-aos-duration="2000">We are a team of <span className='text-green-400'>Geeks</span> with great expertise</p><br />
    </div>
    {/* this is work div */}
    <br />




    <div className="flex justify-center items-center gap-7 flex-wrap">
        <div className="wrk-boxes h-[300px] md:w-[22%] sm:w-[45%] w-[90%]">

            <div className="squre w-[80px]  h-[80px] rotate-[50deg] rounded-2xl m-auto  bg-green-200 "><FaUserTie className='text-[#6DC77A] text-[60px] rotate-[-50deg]'/>

            </div><br />
             <h1 className='text-center text-[25px] text-green-600 font-bold'>Tech-Consultancy</h1>
              <p className='text-center'>We help you research, discover and define the ideal technology solution to your needs.</p>

        </div>

        <div className="wrk-boxes md:w-[22%] sm:w-[45%] w-[90%] h-[300px] ">

              <div className="squre w-[80px] h-[80px] rotate-[50deg] rounded-2xl m-auto  bg-green-200 "><MdColorLens className='text-[#6DC77A] text-[60px] rotate-[-50deg]'/>
            </div><br />
            <h1 className='text-center text-[25px] text-green-600 font-bold' >Design</h1>
            <p className='text-center'>We use the industry best practices to design user centric software solutions.</p>
           

        </div>
        <div className="wrk-boxes md:w-[22%] sm:w-[45%] w-[90%] h-[300px] ">

              <div className="squre w-[80px] h-[80px] rotate-[50deg] rounded-2xl m-auto  bg-green-200 "><FaLaptop className='text-[#6DC77A] text-[60px] rotate-[-50deg]'/>

            </div><br />
            <h1 className='text-center text-[25px] text-green-600 font-bold'>Development</h1>
            <p className='text-center'>We convert your requirements into fully functional Web, Mobile, or SAAS applications.</p>



        </div>
        <div className="wrk-boxes md:w-[22%] sm:w-[45%] w-[90%] h-[300px] ">

              <div className="squre w-[80px] h-[80px] rotate-[50deg] rounded-2xl m-auto bg-green-200 "><HiSpeakerphone className='text-[#6DC77A] text-[60px] rotate-[-50deg] m-auto'/>

            </div><br />
            <h1 className='text-center text-[25px] text-green-600 font-bold' >Digital Marketing</h1>
            <p className='text-center'> We help you reach the right audience, build brand loyalty, and drive measurable results.</p>
        </div>
    </div>





    {/* work div end */}
   

   </div><br /><br />
   </>
  )
}

export default Services