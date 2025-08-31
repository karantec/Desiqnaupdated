import React from 'react'
import { Menu, X } from 'lucide-react'
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
    name: 'Testimonial',
    href: '/#testimonial',
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
   <div className="relative flex flex-row justify-center space-x-3 w-full bg-slate-500 items-center p-2">
  <h1 className="text-center text-white  py-2 h-15 student-cracks">
    Each day a student Cracks 20+ LPA  SDE offer in our program!
  </h1>
  {"   " }
  <Link to= "https://wa.me/918879355057">
  <button role="button" className='mt-2 mb-2  font-sans lg:text-1xl  font-bold uppercase rounded-lg sm:text-base py-1 px-1  sm:mr-3 bg-red-500 text-white  items-center top-enroll-btn'>
    Enroll Now
  </button></Link>
</div>

    <div className="relative w-full    bg-gray-100 shadow-lg">
    
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 text-black font-roboto">
        <div className="inline-flex items-center space-x-2">
          <span>
            {/* <img width={70} height={70} src="logo1.png" alt="logo" /> */}
          </span>
          <span className="font-bold text-red-600 uppercase"> <i>DesiQna</i> </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8 font-serif">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm font-semibold hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
        
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden bg-white shadow-lg">
            <div className="divide-y-2 divide-gray-50 rounded-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-red-600 uppercase"> <i>DesiQna</i> </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}
