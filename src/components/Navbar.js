import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#141414] w-full flex py-[20px] px-[30px] justify-between  '>
     <div className='flex items-center space-x-[83px]'>
     <div className=" flex items-baseline justify-end space-x-2">
         <p className="text-[#f5f5f5] font-[700] text-[31px]">Amuzi </p>
         <div className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div> 
     </div>
     <div className='flex items-center space-x-[40px]'>
        <p className='text-[18px] text-white'>About Us</p>
        <p className='text-[18px] text-white'>Tournament</p>
        <p className='text-[18px] text-white'>Schedule</p>
     </div>
     </div>
     <div>
        <button className='py-[10px] px-[20px] bg-[#282828] rounded-md text-[18px] text-white'>Register</button>
     </div>
    </div>
  )
}

export default Navbar