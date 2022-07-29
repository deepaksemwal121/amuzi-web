import React from 'react'
import Navbar from '../components/Navbar'
import banner from "../assets/banner.png"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#141414] w-full h-screen'>
        {/* Banner Section  */}
        <div className='flex justify-between'>
          <div className='flex flex-col pt-[198px] pl-[70px]  w-[581px]'>
            <h3 className='text-[32px] font-[700] text-white leading-[36px]'>Mumbai Indians Vs Chennai Superkings</h3>
            <p className='text-[#c9c8c8] text-[18px] font-[500] leading-[36px]' >Indian Premier League 2022</p>
            <p className='text-[#a4a2a2] leading-[36px] text-[16px]'>Catch the Live matches of Indian Premier League only on Amuzi</p>
            <button className='mt-[70px] w-[160px] rounded-lg px-[30px] py-[10px] text-[18px] bg-white'>Watch Live</button>
            <p className='text-[#a4a4a4] leading-8 text-[14px]'>Register Now to Watch The upcoming live matches</p>
          </div>
          <div className='' >
            <img src={banner} alt= "banner" />
          </div>
        </div>
        <div className='px-[70px]'>
          <h3 className='text-[30px] leading-[30px] font-[600] text-white'>Upcoming Events</h3>
          <div>
            1
          </div> <div>
            1
          </div> <div>
            1
          </div> <div>
            1
          </div>
        </div>
      </div>
    </>
  )
}

export default Home