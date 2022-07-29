import React from 'react'
import Navbar from '../components/Navbar'
import banner from "../assets/banner.png"
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className='bg-[#141414] w-full '>
        {/* Banner Section  */}
        <div className='flex justify-between'>
          <div className='flex flex-col pt-[198px] pl-[70px]  w-[581px]'>
            <h3 className='text-[32px] font-[700] text-white leading-[36px]'>Mumbai Indians Vs Chennai Superkings</h3>
            <p className='text-[#c9c8c8] text-[18px] font-[500] leading-[36px]' >Indian Premier League 2022</p>
            <p className='text-[#a4a2a2] leading-[36px] text-[16px]'>Catch the Live matches of Indian Premier League only on Amuzi</p>
            <button onClick={() => navigate("/event/eventname")} className='mt-[70px] w-[160px] rounded-lg px-[30px] py-[10px] text-[18px] bg-white'>Watch Live</button>
            <p className='text-[#a4a4a4] leading-8 text-[14px]'>Register Now to Watch The upcoming live matches</p>
          </div>
          <div className='' >
            <img src={banner} alt= "banner" />
          </div>
        </div>
        <div className='px-[70px]'>
          <h3 className='text-[30px] leading-[30px] font-[600] text-white'>Upcoming Events</h3>
          <div className="flex">
          {[
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
            {
              name: "India Women In Olympics",
              time: "8:00 PM",
              thumbnail:
                "https://cdn.pixabay.com/photo/2021/09/10/06/47/paddle-tennis-6612340_960_720.jpg",
            },
          ].map((item, i) => {
            return (
              <div className="mr-8 my-5 rounded-t-lg">
                <div className="relative">
                  <img className="rounded-t-3xl " src={item.thumbnail} alt="thumb"/>
                  <div className="bg-gradient-to-b w-full h-full from-transparent z-20 to-[#141414] absolute top-0"></div>
                </div>
                <div className="text-[20px] text-white font-[500] ">{item.name}</div>
                <div className="text-[16px] text-[#a3a4a4] ">Live at {item.time}</div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </>
  )
}

export default Home