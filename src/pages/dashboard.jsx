import React from 'react'
import {
  Plus,
  Smile,
} from "lucide-react"

const Dashboard = () => {
  return (
    <div className='flex'>
        <SideBarChannels/>
        <SideBarChats/>
        <MessageInput/>
        
    </div>
    
  )
}


export const MessageInput = () => {
  return (
        <div className="p-3 sm:p-4 border-t border-purple-900">
          <div className="relative">
            <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              <Plus className="w-5 h-5" />
            </button>

            <input
              type="text"
              placeholder="Message..."
              className="
                w-full bg-purple-900 bg-opacity-50
                rounded-lg
                pl-10 sm:pl-12
                pr-10 sm:pr-12
                py-2.5 sm:py-3
                text-sm
                focus:outline-none
                focus:ring-2 focus:ring-purple-600 text-white
                placeholder:text-[#a421ef]
                
              "
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300">
              <Smile className="w-5 h-5" />
            </button>
          </div>
    </div>

  )
}




export const SideBarChannels = () => {
  return (
    <div className='w-max h-screen bg-gray-900'>
        <div className="
         sm:flex
        w-16 md:w-20
        bg-gray-900
        flex-col items-center
        py-3 space-y-2
      ">
        {["bg-red-600","bg-orange-500","bg-lime-400","bg-cyan-400",]
        .map((color, index) => (
          <div
            key={index}
            className={`${color} w-10 h-10 md:w-12 md:h-12 rounded-2xl
              hover:rounded-xl transition-all duration-200 cursor-pointer`}
          />
        ))}
      </div>
    </div>
  )
}


export const SideBarChats = () => {
  return (
    
    <div className="
        hidden md:flex
        w-56 lg:w-60
        bg-purple-950
        flex-col
      ">
        <div className="h-12 px-4 flex items-center border-b border-purple-900">
          <span className="text-orange-500 font-semibold">
            Direct Messages
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="px-2 py-1.5 text-gray-400 text-xs font-semibold uppercase">
            Direct Messages
          </div>
        </div>
    </div>
  )
}




export default Dashboard