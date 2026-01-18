import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/react";
import { Menu as MenuIcon } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
          <span className="text-xl font-semibold">NodeUg</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </motion.nav>

        {/* Actions */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <Link to="/login">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
          </Link>

          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>

          {/* Mobile Dropdown */}
          <Menu as="div" className="relative md:hidden">
            <MenuButton className="inline-flex items-center justify-center rounded-md p-2 hover:bg-muted">
              <MenuIcon className="h-5 w-5" />
            </MenuButton>

            <MenuItems className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md border bg-background shadow-lg focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <Link
                    variant="ghost"
                    to="/login"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-muted" : ""
                    }`}
                  >
                    Sign In
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </motion.div>
      </div>
    </motion.header>
  );
}
