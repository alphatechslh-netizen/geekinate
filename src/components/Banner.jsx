import React from 'react'
import ban from '../assets/ban.svg'


const Banner = () => {
  return (
   <>
   <div className="banner flex flex-col items-center justify-center gap-[20px] pt-[80px] sm:flex-row sm:pt-[80px]">
    <div className="boxes h-auto sm:h-auto w-[90%] sm:w-[45%]" data-aos="fade-up"  data-aos-duration="2000">
        <h1 className="font-bold text-[45px] mt-7 ml-6">We <span className='text-green-400'>Geekinate</span> solutions for your digital needs</h1>
        <p className="text-[20px] ml-6">Geekinate is the process of bringing your digital vision to life with our team of Geeks.</p><br />
        <button className="bg-green-500 text-amber-50 font-bold border-0 rounded-[5px] text-[20px] px-3 py-2 ml-6" data-aos-duration="2000" data-aos-delay="300" data-aos="fade-up">Let's connect</button>
    </div>
    <div className="boxes h-auto sm:h-[400px] w-[90%] sm:w-[45%]" data-aos="fade-up"  data-aos-duration="2000">
        <img className="h-full w-full" src={ban} alt="" />
    </div>
   </div>
   </>
  )
}

export default Banner