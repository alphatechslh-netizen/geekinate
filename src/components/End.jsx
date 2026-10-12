import React from 'react'
import logo from '../assets/logo.webp'
import us from '../assets/us.svg'
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import pak from '../assets/pak.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const End = () => {
  return (
   <> <div class="custom-shape-divider-top-1790054908">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
   <div className="end bg-[#202942] flex-col items-center justify-center gap-[30px]">
    <div className="finish h-[80px] w-[100%]"><img className='pl-[70px] pt-[60px]' src={logo} alt="" /></div><br /><br/><br />
    <div className="finish h-auto w-[100%] flex flex-col justify-center items-center gap-[20px] pt-[20px] sm:flex-row">
        <div className="adrs h-auto w-[85%] sm:w-[30%]">
            <span className='flex items-center gap-[20px]'><img className='h-[20px] w-[30px]' src={us} alt="" />
            <p className='text-[#E0E0E0]'>USA - Head Office</p></span>
            <span className='flex items-center gap-[20px] text-[#E0E0E0]'><IoLocationOutline className='text-[20px]' />
            <p>172 Woodport Road, Suite A #442, Sparta,<br /> New Jersey, 07871, USA.</p>
            </span>
            <span className='flex items-center gap-[20px] text-[#E0E0E0]'><CiPhone className='text-[20px]'  />
            <p>+1 (512) 900-6431</p></span>
        </div>
        <div className="adrs h-auto w-[85%]  sm:w-[30%]">
            <span className='flex items-center gap-[20px]' ><img className='h-[20px] w-[30px]' src={pak} alt="" />
            <p className='text-[#E0E0E0]'>Pakistan</p>
            </span>
            <span className='flex items-center gap-[20px] text-[#E0E0E0]'><IoLocationOutline className='text-[20px]' />
            <p>Twinhub, 4th Floor, The Interlace, I-8 Markaz, Islamabad</p></span>
            <span  className='flex items-center gap-[20px] text-[#E0E0E0]'><CiPhone className='text-[20px]' />
            <p>+92 333 5388734</p></span>
        </div>
        <div className="adrs h-auto w-[85%]  sm:w-[30%]">
            <p className='font-bold text-[15px] text-[#E0E0E0]'>Stay in Touch</p><br />
            <p className='flex items-center gap-[15px] text-[30px] text-[#E0E0E0]'><FaFacebookSquare /><FiInstagram /><FaTwitter /><FaLinkedin /></p>
        </div>
    </div><hr />
    <div className="finish h-[50px] w-[100%] flex justify-center items-center text-[20px] text-[#E0E0E0] ">
        <p>© 2026 Geekinate.</p>
    </div>
   </div>
   </>
  )
}

export default End