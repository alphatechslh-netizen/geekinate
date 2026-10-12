import React from 'react'
import contact from '../assets/contact.svg'

const Contact = () => {
  return (
   <>
   <div className="contact flex-col items-center">
    <div className="connect text-center">
        <h1 className='font-bold text-[30px]' data-aos="fade-up" data-aos-duration="1000">Get In Touch!</h1>
        <p className='text-center' data-aos="fade-up" data-aos-duration="1500">We love to talk to the people, listen to their requirements and team up to refine and Geekinate their tech needs.</p>

    </div><br />
    <div className="connect flex flex-col justify-center items-center gap-[20px] sm:flex-row">
      <div className="pic h-[400px] w-[90%] sm:w-[45%]" data-aos="zoom-in" data-aos-duration="1500" ><img className='h-full w-full' src={contact} alt="" /></div>
      <div className="form h-[400px] w-[90%] sm:w-[45%] border-[2px] border-gray-400 gap-[50px] flex-col pt-[30px] pl-[20px]" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="2000">
       <div className="foorm h-[60px] w[100%] flex justify-around items-center gap-[20px]">
        <div className="name h-[50px] w-[50%]">
          <label htmlFor="name">Your Name</label><br />
          <input className='border-2 border-black w-[80%]' type="text" placeholder="Name" id="" />
        </div>
        <div className="email w-[50%] h-[50px]">
          <label htmlFor="email">Your E-mail</label><br />
          <input className='border-2 border-black w-[80%]' type="text" placeholder="E-mail" id="" />
        </div>
       </div><br />
       <div className="foorm h-[90px] w[100%]">
        <label htmlFor="message">Message</label><br />
        <textarea className='h-[80px] w-[90%] border-2 border-black' placeholder="Message" id=""></textarea>
        </div><br /><br />
       <div className="foorm h-[60px] w[100%]">
        <button className='bg-[#4ABA5A] h-[50px] w-[90%] font-bold border-0 rounded-[5px] text-white'>Send Message</button>
       </div>
      </div>
    </div>
   </div><br /><br />
   </>
  )
}

export default Contact