import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { CiDark } from "react-icons/ci";
import { navLinks } from '../utils/data';


const Navbar = () => {
  return (
      <nav className='navbar fixed bottom-2 left-2 right-2 lg:bottom-4 lg:top-4 lg:left-4 lg:right-auto rounded-xl py-2 md:py-3 lg:py-8 lg:px-3 px-2 flex lg:flex-col justify-between items-center '>
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <ul className='flex lg:flex-col gap-x-2 lg:gap-x-0 lg:gap-y-5 items-center'>
              {navLinks.map((link) => {
                  const {id, title, icon, path} = link

                  return (
                      <li key={id}>
                          <NavLink to={path} className=' grid place-items-center text-lg text-[#9399A2] poppins-medium tracking-wide capitalize transition-all ease-in-out duration-150 hover:border-b hover:border-white'>
                              <span>{icon}</span>
                              {title}
                          </NavLink>
                      </li>
                  )
              })}
          </ul>

          <div className='grid place-items-center'>
              <button type='button' className='p-1 bg-[#0B131E] transition-all ease-in-out duration-150 hover:bg-black rounded-lg' >
                  <CiDark size={27} />
              </button>
          </div>
    </nav>
  )
}

export default Navbar