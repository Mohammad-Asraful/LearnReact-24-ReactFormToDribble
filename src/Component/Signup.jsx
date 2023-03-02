import { FcGoogle } from "react-icons/fc";
import React from 'react'
import image from '../Image/ali-kazal-OSaI8DxrNKM-unsplash.jpg'

const Signup = () => {
   return (
      <section className="p-8 flex justify-center items-center bg-[#F7F6FD]">

         <div className="p-8 w-1/2 bg-white h-[500px] grid items-center">
            <div>
               <h1 className="text-4xl font-bold mb-2">Login</h1>
               <small className="lg:text-base md:text-sm sm:text-[10px]">See your growth and get consulting support!</small>
            </div>
            <button className="border p-1 w-5/6 border-black rounded-full flex gap-3 items-center justify-center sm:text-sm"><FcGoogle /> <span className="opacity-50 font-bold">Sign in with Google</span></button>
            <form>
               <div className="mb-2">
                  <label className="inline-block mb-2 font-bold" htmlFor="email">Email*</label><br />
                  <input className="border p-1 pl-3 w-5/6 border-black rounded-full sm:text-sm" type="email" placeholder="Enter your email" />
               </div>

               <div className="mb-2">
                  <label className="inline-block mb-2 font-bold" htmlFor="password">Password*</label><br />
                  <input className="border p-1 pl-3 w-5/6 border-black rounded-full sm:text-sm" type="password" placeholder="Enter your password" />
               </div>


               <button className="border p-1 w-5/6 border-black rounded-full mt-4 bg-blue-600 text-white">Login</button>
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