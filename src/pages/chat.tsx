import React, { useState } from "react"
import {
  Search,
  Bell,
  User,
  Settings,
  Video,
  Phone,
  Plus,
  Smile,
} from "lucide-react"

type Message = {
  text: string
  timestamp: Date
}

export default function DiscordChat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])

  const serverColors = [
    "bg-red-600",
    "bg-orange-500",
    "bg-lime-400",
    "bg-cyan-400",
  ]

  const handleSendMessage = () => {
    if (!message.trim()) return

    setMessages((prev) => [
      ...prev,
      { text: message, timestamp: new Date() },
    ])
    setMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage()
  }

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white font-sans">

      {/* ================= Server Sidebar ================= */}
      <div className="
        hidden sm:flex
        w-16 md:w-20
        bg-gray-900
        flex-col items-center
        py-3 space-y-2
      ">
        {serverColors.map((color, index) => (
          <div
            key={index}
            className={`${color} w-10 h-10 md:w-12 md:h-12 rounded-2xl
              hover:rounded-xl transition-all duration-200 cursor-pointer`}
          />
        ))}
      </div>

      {/* ================= Channels Sidebar ================= */}
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

      {/* ================= Main Chat Area ================= */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-purple-900 to-purple-950">

        {/* -------- Top Bar -------- */}
        <div className="h-12 px-3 sm:px-4 flex items-center justify-between border-b border-purple-900">

          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-orange-500 font-semibold text-sm sm:text-base">
              Username
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-4">

            <Video className="hidden sm:block w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Phone className="hidden sm:block w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />

            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-purple-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                className="
                  bg-purple-950 border border-purple-800 rounded-md
                  pl-9 pr-3 py-1.5 text-sm
                  w-28 sm:w-40 md:w-56 lg:w-64
                  focus:outline-none focus:border-purple-600
                "
              />
            </div>

            <Bell className="hidden md:block w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <User className="hidden md:block w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* -------- Messages -------- */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          {messages.map((msg, index) => (
            <div key={index} className="mb-4 flex items-start gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-purple-300" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">You</span>
                  <span className="text-xs text-gray-400">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <p className="text-sm text-gray-200 mt-1 break-words max-w-[75vw] sm:max-w-none">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* -------- Message Input -------- */}
        <div className="p-3 sm:p-4 border-t border-purple-900">
          <div className="relative">
            <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              <Plus className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Message..."
              className="
                w-full bg-purple-900 bg-opacity-50
                rounded-lg
                pl-10 sm:pl-12
                pr-10 sm:pr-12
                py-2.5 sm:py-3
                text-sm
                focus:outline-none
                focus:ring-2 focus:ring-purple-600
              "
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300">
              <Smile className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
