import React from 'react'
import sortlist from '../assets/sortlist.webp'
import awspartner from '../assets/awspartner.webp'
import clutch from '../assets/clutch.webp'
import shopify from '../assets/shopify.webp'
import google from '../assets/google.webp'
import cloudways from '../assets/cloudways.webp'

const Collab = () => {
  return (
    
    <>
    <div class="custom-shape-divider-top-1790054908">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
   <div className="collab bg-blue-950 flex-col items-center">
    <div className="parts h-auto pt-[40px] ">
        <h1 className='font-bold text-[#BABBBF] text-center text-[30px] pt-[30px]'>Collaborators and Partners</h1>

    </div><br /><br />
    <div className="parts bg-blue-950 h-auto  flex flex-wrap justify-center items-center gap-[40px] pl-[50px] sm:flex-row ">
        <div className="partners h-[150px] w-[30%] sm:w-[30%]"><img src={sortlist} alt="" /></div>
        <div className="partners  h-[150px] w-[30%] sm:w-[30%]"><img src={awspartner} alt="" /></div>
        <div className="partners  h-[150px] w-[30%] sm:w-[30%]"><img src={clutch} alt="" /></div>
        <div className="partners h-[150px] w-[30%] sm:w-[30%]"><img src={shopify} alt="" /></div>
        <div className="partners h-[150px] w-[30%] sm:w-[30%]"><img src={google} alt="" /></div>
        <div className="partners  h-[150px] w-[30%] sm:w-[30%]"><img src={cloudways} alt="" /></div>
    </div>
   </div><br /><br />
   </>
  )
}

export default Collab