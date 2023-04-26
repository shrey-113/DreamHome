import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import { AuthContext } from '../store/authContext'
import useIsNotLoggedIn from '../hooks/useIsNotLoggedIn'

function BranchHome() {
  useIsNotLoggedIn()

  const { state } = useContext(AuthContext)

  const { id } = useParams()

  return (
    <div className='flex items-center justify-center mt-36'>
      <div className='grid grid-cols-2 gap-4'>
        <Link to='/search'>
          <div className='bg-gray-200 shadow rounded-lg p-20 hover:bg-gray-300 transition-all duration-200 items-center justify-center text-center'>
            <h2 className='text-lg font-semibold '>Search</h2>
          </div>
        </Link>
        <Link to='staff'>
          <div className='bg-gray-200 shadow rounded-lg p-20 hover:bg-gray-300 transition-all duration-200 items-center justify-center text-center'>
            <h2 className='text-lg font-semibold '>Staff</h2>
          </div>
        </Link>
        <Link to='client'>
          <div className='bg-gray-200 shadow rounded-lg p-20 hover:bg-gray-300 transition-all duration-200 items-center justify-center text-center'>
            <h2 className='text-lg font-semibold '>Add Clients</h2>
          </div>
        </Link>
        <Link to='owner'>
          <div className='bg-gray-200 shadow rounded-lg p-20 hover:bg-gray-300 transition-all duration-200 items-center justify-center'>
            <h2 className='text-lg font-semibold '>Add Owners</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BranchHome
