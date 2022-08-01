import axios from "axios";
import { useState } from "react";
import {BsArrowLeft} from "react-icons/bs";
import { useNavigate } from "react-router-dom";



const Login = () => {
const SERVER_URL = 'https://amuzi.backend.upgrate.in';
const [phoneNummber, setPhoneNumber] = useState("")
const [hide , setHide] = useState(true);
const [loader,setLoader] = useState(false);
const [resendTime , setresendTime] = useState(true);
const [message,setMessage] = useState("");
const [otp,setOTP]= useState(new Array(4).fill(""));
const navigate = useNavigate();

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
const resendOTP =  () => {

}

const handlePhoneNumber = async(e) => {
   e.preventDefault() 
   setLoader(true) 
   const  data = {
    phoneNo : "91"+phoneNummber
   }
   try{
    const res =  await axios.post(`${SERVER_URL}/v1/user/auth/login`,data);
      console.log(res.data.message)
      setHide(false)
      setLoader(false)
    
   }
   catch(err) {
    setLoader(false)
    console.log(err)
   } 
}

const handleOTP = async(e) => {
    e.preventDefault()
    setLoader(true)
    const data = {
        phoneNo:`91${phoneNummber}`,
        otp: otp.reduce((prev, curr) => prev + curr),
 
    }
    console.log(data);
    try {
      const res =  await axios.post(`${SERVER_URL}/v1/user/auth/verify-otp`, data);
      console.log(res)
      setLoader(false);
      localStorage.setItem("accessToken",res.data.accessToken);
      localStorage.setItem("refreshToken",res.data.refreshToken);
     setMessage("OTP Verifed Successfully")
     navigate("/")
    }catch(err){
        console.log(err)
        setLoader(false);
    }
}


  return (
    <div className='flex justify-center items-center w-100 bg-[#141414] h-screen'>
        <div>
        <div onClick={()=> navigate("/")} className='text-white cursor-pointer flex space-x-4 items-center pb-[21px]'><BsArrowLeft size={25} /><span className="text-[20px]">Go back</span></div>
            <div className='rounded-[20px] shadow-lg space-x-10 flex p-[115px] bg-[#282828]'>

                {/* Phone Number Input */}

                <div className={`w-[50%] ${hide ?"":"hidden"}`}>
                    <div> 
                    <h3 className="text-white font-[500] text-[36px]">Welcome to Amuzi</h3>
                    <p className="text-[#828282] text-[18px] w-[411px]">Register on Amuzi and Sign in to your existing account via Mobile Number</p>
                    </div>
                    <div className="pt-[41px] pb-[40px]">
                        <form onSubmit={handlePhoneNumber}>
                        <label className="text-white">Enter Your Mobile Number</label>
                        <div className="border-b-[1px] border-[#F5F5F5] w-[380px] flex">
                            <span className="p-2 text-[18px] text-[#f5f5f5]" >+91-</span>
                            <input type="text" required onChange={e=>{setPhoneNumber(e.target.value)}} value={phoneNummber} className=" text-[18px] p-2 bg-transparent focus: ring-0 focus:outline-none text-[#f5f5f5]" maxLength="10" />
                        </div>
                        <div>
                        <span className="text-red-500 py-6"></span>
                        </div>
                        <div className="flex items-start py-[40.99px] space-x-3 w-[340px]">
                            <div className="checkbox-container rounded-lg">
                            <input id="checkb" required type="checkbox" className=" w-[24px] h-[24px]"/>
                            </div>
                            <p className="text-[#FFFFFF] text-[18px]">I have read and hereby accept the <strong>Term
                                of use</strong> and <strong>Privacy note</strong></p>
                        </div>
                        <div className="pt-[74px]  text-center">
                            <button type="submit" className="bg-[#141414] w-[378px] px-[18px] py-[16px] rounded-[16px] flex space-x-3 items-center justify-center text-[#f5f5f5] text-[16px] font-[700] hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " ><span>Continue</span> <div role="status">
    <svg className={`${loader?"inline":"hidden"} mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div> </button>
                        </div>
                        </form>
                    </div>
                     </div>

                     {/* OTP Box */}

                     <div className={`w-[50%] ${!hide ?"":"hidden"}`}>
                    <div> 
                    <h3 className="text-white font-[500] text-[36px]">Phone Number Verification</h3>
                    <p className="text-[#828282] text-[18px] w-[411px]">Enter OTP For Registration</p>
                    </div>
                    <form onSubmit={handleOTP}>
                    <div className="pt-[41px] pb-[40px]">
                        <label className="text-white">Enter OTP To Verify</label>
                        <div className="space-x-2 w-[380px] flex mt-6">
                            {otp.map((item,index)=>{
                                return <input required className="w-12 h-12 text-center rounded-lg bg-[#141414] text-white p-1" name="otp" maxLength={1} key={index} onChange={(e)=> handleChange(e , index)} onFocus={ e => e.target.select()} type="text" />
                            })}
                           
                        </div>
                        <div>
                            {/*Errror Throw Message  */}
                        <span className="text-green-500 py-6">{message}</span>
                        </div>
                        {/* <div className="flex items-start py-[40.99px] space-x-3 w-[340px]">
                            <button className={`text-[#FFFFFF] text-[18px]`} >Resend OTP <span> in 45 sec </span></button>
                        </div> */}
                        <div className="pt-[74px] w-[380px] text-center">
                        <button type="submit" className="bg-[#141414] w-[378px] px-[18px] py-[16px] rounded-[16px] flex space-x-3 items-center justify-center text-[#f5f5f5] text-[16px] font-[700] hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " ><span>Verify OTP</span> <div role="status">
    <svg className={`${loader?"inline":"hidden"} mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div> </button>
                        </div>
                    </div>
                    </form>
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