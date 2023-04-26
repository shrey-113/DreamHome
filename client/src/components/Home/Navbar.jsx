import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../store/authContext'

import logo from '../../assets/dreamhome.svg'

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext)

  const handleLogout = () => {
    dispatch({
      type: 'logout',
    })
  }

  return (
    <div className='navbar bg-gray-600 '>
      <Link to='/' className='flex-1'>
        <img src={logo} alt='DreamHome Logo' width='50' height='50' />
      </Link>
      <div className='flex-none'>
        <ul className='flex justify-center items-center px-1'>
          <li>
            <Link to='/about' className='text-white mx-2'>
              About
            </Link>
          </li>
          <li>
            <Link to='/search' className='text-white mx-2'>
              Search
            </Link>
          </li>
          <li>
            <Link to='/branches' className='text-white mx-2'>
              Branches
            </Link>
          </li>
          <li>
            <Link to='/properties' className='text-white mx-2'>
              Properties
            </Link>
          </li>
          <li>
            {state.isAuthenticated && (
              <Link
                to={'/branch/' + state.branchnumber}
                className='text-white mx-2'
              >
                Your Branch
              </Link>
            )}
          </li>
          <div className='mx-2'>
            {state.isAuthenticated ? (
              <Link to='/login' className='btn' onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to='/login' className='btn'>
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
