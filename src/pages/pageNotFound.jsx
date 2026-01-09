import 'react'
import '../index.css'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'



function PageNotFound() {
    return (
        <main className='w-screen h-screen flex flex-col justify-center items-center bg-black'>
            <h1 className="text-6xl font-bold text-white wrap-break-word">404 Page not found</h1>

            <Link to={"/"} className={"hover: cursor-pointer p-3 mt-7 bg-white rounded-3xl"}>Return to Home</Link>
        </main>
)
}

export default PageNotFound
