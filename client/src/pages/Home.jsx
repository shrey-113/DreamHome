import { useContext } from 'react'

import { AuthContext } from '../store/authContext'

import hero from '../assets/hero.avif'

const Home = () => {
  const { state } = useContext(AuthContext)

  return (
    <>
      <div className='flex flex-col items-center justify-center relative'>
        <img src={hero} alt='DreamHome Hero' className='w-full' />
        <div className='flex flex-col items-center justify-center absolute'>
          <h1 className='text-4xl font-semibold text-gray-800'>DreamHome</h1>
          <h2 className='text-2xl font-semibold text-gray-800'>
            Find your dream home today!
          </h2>
        </div>
      </div>
    </>
  )
}

export default Home
