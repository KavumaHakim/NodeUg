import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg"></div>
          <Link to={"/"}><span className="text-xl font-semibold">NodeUg</span></Link>
        </div>
        
        {/* <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav> */}
        
        <div className="flex items-center gap-4">
          <Link to="/login"><Button variant="ghost" className="hidden md:inline-flex">Sign In</Button></Link>
          <Link to="/signup"><Button>Get Started</Button></Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
    );
}