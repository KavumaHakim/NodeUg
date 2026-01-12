import 'react'
import '../index.css'
import { Button } from "@/components/ui/button"
import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Login = () =>{
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-0 bg-linear-to-br from-[#FB8200] to-[#8B00DB]'>
      <img src={logo} alt="Logo" className='w-50 h-50'/>
      <Form className='relative  flex flex-col gap-2 bg-white/20 backdrop-blur-xl p-10 rounded-[60px] border border-white/40 shadow-xl max-w-md w-full m- mt-0' method='post' action='/#'>
        
        <label htmlFor="email" className='text-[#8B00DB] ml-1'>Email</label>
        <input type="email" id="email" className='w-full px-4 py-3 bg-white/40 backdrop-blur-md border border-white/40 rounded-full text-slate-800 placeholder-slate-500 shadow-sm outline-none focus:border-white/70 focus:ring-2 focus:ring-white/50' />

        <label htmlFor="password" className='text-[#8B00DB] ml-1'>Password</label>
        <input type="password" id="password" className='w-full px-4 py-3 bg-white/40 backdrop-blur-md border border-white/40 rounded-full text-slate-800 placeholder-slate-500 shadow-sm outline-none focus:border-white/70 focus:ring-2 focus:ring-white/50' />

        <Link to={"/#"} className='text-white text-center'>Forgot Password</Link>

        <div className='flex justify-center gap-5 mt-5'>
          <Button type="submit" className='w-1/2 rounded-full bg-white text-[#A4188B] hover:bg-white/80 hover:cursor-pointer'>Login</Button>
          <Link to={"/#"} className='flex items-center justify-center w-1/2 rounded-full bg-white text-[#A4188B] text-center'>Sign Up</Link>

          
        </div>
        <div className='flex justify-evenly'>
          <Link to={"/#"} className='text-white text-center'>Terms of Service</Link>
          <Link to={"/#"} className='text-white text-center'>Privacy Policy</Link>
        </div>
      </Form>
    </div>
  )
}

export default Login
