import React,{useState} from 'react'
import logo from '../assets/logo.webp'
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isopen, setIsopen]=useState(false);
  return (
    <>
    <nav className="bg-[#FFFFFF] h-[80px] w-[100%] fixed flex items-center justify-around z-[1] ">
     
        <img className="h-[70px]" src={logo} alt="" />
        <ul className="flex items-center justify-center list-none gap-[20px] hidden md:flex">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li>Portfolio</li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='md:hidden text-[20px]'
        onClick={()=>setIsopen(!isopen)}>
          {isopen ? <FaXmark /> : <FiMenu />}
        </div>
        {isopen &&(
          <ul className=" bg-white md:hidden text-[15px] text-center w-[100%] absolute top-[80px]">
<li className="py-3 border-b border-blue-500">Home</li>
<li className="py-3 border-b border-blue-500">About</li>
<li className="py-3 border-b border-blue-500">Courses</li>
<li className="py-3">Contact</li>
</ul>
        )}
    </nav>
    </>
  )
}

export default Navbar