import 'react'
import '../index.css'
import { Button } from "@/components/ui/button"
import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () =>{
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 bg-linear-to-br from-[#FB8200] to-[#8B00DB]'>
      <Form className='relative flex flex-col gap-4
            bg-white/30 backdrop-blur-xl
            p-10 rounded-[60px]
            border border-white/40
            shadow-xl
            max-w-md w-full m-5' method='post' action='/login'>

        <label htmlFor="email" className='text-[#8B00DB] ml-1'>Email</label>
        <input type="email" id="email" className='w-full px-4 py-3
         bg-white/40 backdrop-blur-md
         border border-white/40
         rounded-xl
         text-slate-800 placeholder-slate-500
         shadow-sm
         outline-none
         focus:border-white/70
         focus:ring-2 focus:ring-white/50' />

        <label htmlFor="password" className='text-[#8B00DB] ml-1'>Password</label>
        <input type="password" id="password" className='w-full px-4 py-3
         bg-white/40 backdrop-blur-md
         border border-white/40
         rounded-xl
         text-slate-800 placeholder-slate-500
         shadow-sm
         outline-none
         focus:border-white/70
         focus:ring-2 focus:ring-white/50' />

        <div className='flex justify-center gap-5 mt-4'>
          <Button type="submit" className='w-1/2'>Login</Button>
          <Link to={"#"} className='w-1/2 text-center'>Sign Up</Link>
        </div>

      </Form>
    </div>
  )
}

export default Login
