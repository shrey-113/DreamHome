import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import useHttp from '../hooks/useHttp'
import { AuthContext } from '../store/authContext'
import useIsNotLoggedIn from '../hooks/useIsNotLoggedIn'

function AddStaff() {
  useIsNotLoggedIn()

  const navigate = useNavigate()
  const { state } = useContext(AuthContext)

  const [data, setData] = useState({
    clientname: '',
    clientaddress: '',
    clientphone: '',
    clientemail: '',
  })

  const { isLoading, error, sendRequest } = useHttp()

  const submitHandler = async e => {
    e.preventDefault()

    try {
      const res = await sendRequest(
        '/create/client',
        'POST',
        JSON.stringify(data)
      )

      console.log(res)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className='
      p-6 px-40
    '
    >
      <div className='text-xl font-lato font-black mb-4 w-full  justify-center flex text-2xl '>
        Add a Client
      </div>
      <form onSubmit={submitHandler}>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='clientname'
              id='clientname'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.clientname}
              onChange={e => setData({ ...data, clientname: e.target.value })}
            />
            <label
              htmlFor='floating_first_name'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Name
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='email'
              name='clientemail'
              id='clientemail'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.clientemail}
              onChange={e => setData({ ...data, clientemail: e.target.value })}
            />
            <label
              htmlFor='clientname'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Email address
            </label>
          </div>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='clientaddress'
              id='clientaddress'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.clientaddress}
              onChange={e =>
                setData({ ...data, clientaddress: e.target.value })
              }
            />
            <label
              htmlFor='floating_first_name'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Address
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='clientphone'
              id='clientphone'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.clientphone}
              onChange={e => setData({ ...data, clientphone: e.target.value })}
            />
            <label
              htmlFor='clientname'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Phone Number
            </label>
          </div>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 w-full justify-center items-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddStaff
