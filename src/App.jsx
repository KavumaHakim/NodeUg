import 'react'
import './index.css'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
// import './App.css'


function App() {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center bg-black'>
      <h1 className="text-[60px] font-bold text-gray-500 wrap-break-word">Site Under Construction</h1>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" className={"w-20 hover:opacity-70"}>Button</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>The site is currently under construction. Please check back later!</p>
        </TooltipContent>
      </Tooltip>
      
    </main>
  )
}

export default App
