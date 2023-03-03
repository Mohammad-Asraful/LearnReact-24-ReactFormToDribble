import { FcGoogle } from "react-icons/fc";
import React from 'react'
import image from '../Image/ali-kazal-OSaI8DxrNKM-unsplash.jpg'

const Signup = () => {
   return (
      <section className="flex justify-center items-center bg-[#F7F6FD] p-2 text-xs
      lg:p-8 
      md:p-6 
      sm:p-4 
      ">

         <div className="w-1/2 bg-white h-[500px] grid items-center p-3 
         lg:p-8 
         md:p-6 
         sm:p-4 
         ">
            <div>
               <h1 className="text-4xl font-bold mb-3">Login</h1>
               <small className="lg:text-base md:text-sm sm:text-sm">See your growth and get consulting support!</small>
            </div>
            <button className="border p-1 w-full border-black rounded-full flex gap-3 items-center justify-center text-base"><FcGoogle /> <span className="opacity-50 font-bold">Sign in with Google</span></button>
            <form>
               <div className="mb-2">
                  <label className="inline-block mb-2 font-bold" htmlFor="email">Email*</label><br />
                  <input className="text-base border p-1 pl-3 w-full border-black rounded-full sm:text-sm" type="email" placeholder="Enter your email" />
               </div>

               <div className="mb-2">
                  <label className="inline-block mb-2 font-bold" htmlFor="password">Password*</label><br />
                  <input className="text-base border p-1 pl-3 w-full border-black rounded-full sm:text-sm" type="password" placeholder="Enter your password" />
               </div>


               <button className="text-base border p-1 w-full border-black rounded-full mt-4 bg-blue-600 text-white">Login</button>
            </form>

            <p className="text-blue-700 mt-10 sm:text-[12px]">&copy;2022 Erdem All rights reserved.</p>
         </div>

         <div className="w-1/2">
            <img className="h-[500px] w-screen" src={image} alt="This is a scenary" />
         </div>

      </section>
   )
}

export default Signup