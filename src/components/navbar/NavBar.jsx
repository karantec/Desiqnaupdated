import React from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Curriculum',
    href: '/Curriculum',
  },
 
  {
    name: 'Top Achievers',
    href: '/achiver',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Top Banner */}
      <div className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <h1 className="text-center text-white text-sm sm:text-base font-semibold tracking-wide">
              Each day a student Cracks 20+ LPA SDE offer in our program!
            </h1>
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          </div>
          <Link to="https://wa.me/918879355057">
            <button className="px-6 py-2 bg-white text-purple-600 font-bold text-sm rounded-full hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                DesiQna
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link to="https://wa.me/918879355057">
                <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold text-sm rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="https://wa.me/918879355057" className="block pt-2">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold text-sm rounded-lg hover:shadow-lg transition-all duration-200">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}