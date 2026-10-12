import React from 'react'
import amazon from '../assets/amazon.svg'
import reactt from '../assets/reactt.svg'
import mongodb from '../assets/mongodb.svg'
import node from '../assets/node.svg'
import next from '../assets/next.svg'
import unity from '../assets/unity.svg'

const Stores = () => {
  return (
   <>
   <div className="pics flex flex-wrap sm:flex-row justify-center items-center gap-[40px] sm:pt-[20px] " data-aos="fade-up">
    <div className="images h-[30px] w-[25%] sm:w-[17%]"><img className="h-full w-full" src={amazon} alt="" /></div>
    <div className="images h-[30px] w-[25%] sm:w-[10%]"><img className="h-full w-full" src={reactt} alt="" /></div>
    <div className="images  h-[30px] w-[25%] sm:w-[10%]"><img className="h-full w-full" src={mongodb} alt="" /></div>
    <div className="images  h-[30px] w-[25%] sm:w-[10%]"> <img className="h-full w-full" src={node} alt="" /></div>
    <div className="images  h-[30px] w-[25%] sm:w-[10%]"> <img className="h-full w-full" src={next} alt="" /></div>
    <div className="images  h-[30px] w-[25%] sm:w-[10%]"> <img className="h-full w-full" src={unity} alt="" /></div>
   </div>
   <br />
   <hr /> <br />
   </>
  )
}

export default Stores