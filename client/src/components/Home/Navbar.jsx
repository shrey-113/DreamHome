import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/dreamhome.svg'

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false)

  const handleLogin = () => {
    setAuthenticated(true)
  }

  const handleLogout = () => {
    setAuthenticated(false)
  }

  return (
    <div className='navbar bg-black'>
      <Link to='/' className='flex-1'>
        <img src={logo} alt='DreamHome Logo' width='50' height='50' />
      </Link>
      <div className='flex-none'>
        <ul className='flex justify-center items-center px-1'>
          <li>
            <Link className='text-white mx-2'>Link 1</Link>
          </li>
          <li>
            <Link className='text-white mx-2'>Link 2</Link>
          </li>
          <li>
            <Link to='/about' className='text-white mx-2'>
              About
            </Link>
          </li>
          <div className='mx-2'>
            {authenticated ? (
              <Link to='/login' className='btn' onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to='/' className='btn' onClick={handleLogin}>
                Login
              </Link>
            )}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
