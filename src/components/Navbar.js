import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const showRegister = localStorage.getItem("accessToken") === null;
  console.log(showRegister);

  const navigate = useNavigate();
  return (
    <div className="bg-[#141414] w-full flex py-[20px] px-[70px] justify-between  ">
      <div className="flex items-center space-x-[83px]">
        <div className=" flex items-baseline justify-end space-x-2">
          <p className="text-[#f5f5f5] font-[700] text-[31px]">Amuzi </p>
          <div className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="flex items-center space-x-[40px]">
          <p className="text-[18px] text-white">About Us</p>
          <p className="text-[18px] text-white">Tournament</p>
          <p className="text-[18px] text-white">Schedule</p>
        </div>
      </div>
      <div className="px-[70px] flex items-center justify-center">
        {showRegister ? (
          <button
            className="py-[10px] px-[20px] bg-[#282828] rounded-md text-[18px]  text-white"
            onClick={() => navigate("/login")}
          >
            Register
          </button>
        ) : (
          <span className="flex space-x-3">
            {" "}
            <FaUserCircle color="#f5f5f5" size={25} />{" "}
            <span
              className="text-white text-lg "
              onClick={() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
              }}
            >
              Logout
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
