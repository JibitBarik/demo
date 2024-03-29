
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data)
  const handleshowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const  handleOnchange =(e) =>{
    const {name,value} = e.target
    setData((preve) => {
      return {
        ...preve,
      [name] : value
      }
      
    })

  }
  const handelSumbit = (e) =>{
    e.preventDefault()
    const{email,password} =data

    if( email && password ){
      alert("sucessfully")
  
    }
    else{
      alert("enter all required field")
    }
  }
  return (
    <div className="p-3 md:p-4">
    <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4">
      {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
      <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
        <img src={loginSignupImage} className="w-full" />
      </div>
      <form className="w-full py-3  flex flex-col" onSubmit={handelSumbit}>
      

        

        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          id="email"
          name="email"
          className=" mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          value={data.email}
          onChange={handleOnchange}
        />

        <label htmlFor="password">Password</label>
        <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 ">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className=" w-full bg-slate-200 border-none outline-none"
            value={data.password}
            onChange={handleOnchange}
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleshowPassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>

        <button type="sumbit" className="max-w-[150px] m-auto w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl text-medium text-center py-1 rounded-full mt-4">
         Login
        </button>
      </form>
      <p>Don't have  Account?<Link to="/Signup"className="text-red-500 underline" >Sign Up</Link> </p>
    </div>
  </div>  )
}

export default Login
