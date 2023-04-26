import React from 'react'
import { Link } from 'react-router-dom'

const Owner = () => {
  return (
    <div className='flex justify-center items-center mt-60'>
      <div className='grid grid-cols-2 gap-4'>
        <Link to='addowner'>
          <div className='bg-gray-200 shadow rounded-lg p-20 hover:bg-gray-300 transition-all duration-200 items-center justify-center text-center'>
            <h2 className='text-lg font-semibold '>Add Owner</h2>
          </div>
        </Link>
        <Link to='addproperty'>
          <div className='bg-gray-200 shadow rounded-lg p-20 hover:bg-gray-300 transition-all duration-200 items-center justify-center text-center'>
            <h2 className='text-lg font-semibold '>Add Property</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Owner
