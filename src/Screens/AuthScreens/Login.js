import { useState } from "react";
import {BsArrowLeft} from "react-icons/bs";



const Login = () => {

const [hide , setHide] = useState(true);
const [resend , setresend] = useState(true);
const [otp,setOTP]= useState(new Array(4).fill(""));

const handleChange = (e , i) => {

    if(isNaN(e.target.value)) return false;

    setOTP([...otp.map((data,idx) => (idx === i) ? e.target.value:data)]);

    //Change Focus to next Box 

    if(e.target.nextSibling){
        e.target.nextSibling.focus();
    }

    if (e.inputType === 'deleteContentBackward' && e.target.value === '') {
        e.target.lastChild.focus();
      }


}


  return (
    <div className='flex justify-center items-center w-100 bg-[#141414] h-screen'>
        <div>
        <div className='text-white flex space-x-4 items-center pb-[21px]'><BsArrowLeft size={25} /><span className="text-[20px]">Go back</span></div>
            <div className='rounded-[20px] shadow-lg space-x-10 flex p-[115px] bg-[#282828]'>

                {/* Phone Number Input */}

                <div className={`w-[50%] ${hide ?"":"hidden"}`}>
                    <div> 
                    <h3 className="text-white font-[500] text-[36px]">Welcome to Amuzi</h3>
                    <p className="text-[#828282] text-[18px] w-[411px]">Register on Amuzi and Sign in to your existing account via Mobile Number</p>
                    </div>
                    <div className="pt-[41px] pb-[40px]">
                        <label className="text-white">Enter Your Mobile Number</label>
                        <div className="border-b-[1px] border-[#F5F5F5] w-[380px] flex">
                            <span className="p-2 text-[18px] text-[#f5f5f5]" >+91-</span>
                            <input type="text" className=" text-[18px] p-2 bg-transparent focus: ring-0 focus:outline-none text-[#f5f5f5]" maxLength="10" />
                        </div>
                        <div>
                        <span className="text-red-500 py-6"></span>
                        </div>
                        <div className="flex items-start py-[40.99px] space-x-3 w-[340px]">
                            <div className="checkbox-container rounded-lg">
                            <input id="checkb" type="checkbox" className=" w-[24px] h-[24px]"/>
                            </div>
                            <p className="text-[#FFFFFF] text-[18px]">I have read and hereby accept the <strong>Term
                                of use</strong> and <strong>Privacy note</strong></p>
                        </div>
                        <div className="pt-[74px] w-[380px] text-center">
                            <div className="bg-[#141414] px-[18px] py-[16px] rounded-[16px] text-[#f5f5f5] text-[16px] font-[700] hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " onClick={()=> setHide(false)}> Continue</div>
                        </div>
                    </div>
                     </div>

                     {/* OTP Box */}

                     <div className={`w-[50%] ${!hide ?"":"hidden"}`}>
                    <div> 
                    <h3 className="text-white font-[500] text-[36px]">Phone Number Verification</h3>
                    <p className="text-[#828282] text-[18px] w-[411px]">Enter OTP For Registration</p>
                    </div>
                    <div className="pt-[41px] pb-[40px]">
                        <label className="text-white">Enter OTP To Verify</label>
                        <div className="space-x-2 w-[380px] flex mt-6">
                            {otp.map((item,index)=>{
                                return <input className="w-12 h-12 text-center rounded-lg bg-[#141414] text-white p-1" name="otp" maxLength={1} key={index} onChange={(e)=> handleChange(e , index)} onFocus={ e => e.target.select()} type="text" />
                            })}
                           
                        </div>
                        <div>
                            {/*Errror Throw Message  */}
                        <span className="text-red-500 py-6"></span>
                        </div>
                        <div className="flex items-start py-[40.99px] space-x-3 w-[340px]">
                            <button className={`text-[#FFFFFF] text-[18px]`} >Resend OTP <span> in 45 sec </span></button>
                        </div>
                        <div className="pt-[74px] w-[380px] text-center">
                            <div className="bg-[#141414] px-[18px] py-[16px] rounded-[16px] text-[#f5f5f5] text-[16px] font-[700] hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Verify OTP</div>
                        </div>
                    </div>
                     </div>

                     {/* Graphics Styles Banner */}
                <div className="w-[50%] ">
                    <div className=" flex items-baseline justify-end space-x-2">
                        <p className="text-[#f5f5f5] font-[700] text-[31px]">Amuzi </p>
                        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div> 
                    </div>

                    <div className="rounded-lg pt-[84px] bg-blend-multiply relative">
                        <div className="bg-gradient-to-b w-full h-full from-transparent z-20 to-[#141414] absolute top-0 rounded-b-xl"></div>
                        <img className="rounded-xl bg-blend-lighten" src="https://i.guim.co.uk/img/media/62b645060ff895a9f3a19c2056bd40e474512bf3/0_204_4189_2514/master/4189.jpg?width=620&quality=85&fit=max&s=2784fe2bde0b2fc54ebb8eefd23ba238" alt ="login"/>
                    </div>
                    <div className="absolute p-2 z-30 top-[589px]">
                   <h3 className="w-[450px] font-[700] text-[48px] text-white leading-[50px] ">Enjoy Live streaming of your favourite sports</h3> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Login