import React from 'react'

const About = () => {
  return (
    <div className='hero min-h-screen bg-white'>
      <div className='hero-overlay bg-opacity-100'></div>
      <div className='hero-content text-center text-black'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold text-black '>About Us</h1>
          <p className='mb-5'>
            At Dream Homes, we're committed to helping you find your perfect
            home. Our team of experienced professionals is dedicated to
            providing you with the support and expertise needed to make your
            dream a reality.
          </p>
          <p className='mb-5'>
            Whether you're looking to buy, sell, or rent a home, we're here to
            help. With our extensive network of listings and connections in the
            real estate industry, we can help you find the right property for
            your needs and budget.
          </p>
          <p className='mb-5'>
            Contact us today to learn more about our services and how we can
            help you find your dream home.
          </p>
          <button
            type='submit'
            className='text-white bg-gray-500 hover:bg-gray-700 transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
