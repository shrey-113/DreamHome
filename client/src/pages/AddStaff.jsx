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
    firstname: '',
    lastname: '',
    email: '',
    sex: '',
    date_of_birth: '',
    position: '',
    salary: '',
    branchnumber: state.branchnumber,
    supervisorid: '',
  })

  const { isLoading, error, sendRequest } = useHttp()

  const submitHandler = async e => {
    e.preventDefault()

    try {
      const res = await sendRequest(
        '/create/staff',
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
        Add a Staff Member
      </div>
      <form onSubmit={submitHandler}>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='email'
            name='floating_email'
            id='floating_email'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <label
            htmlFor='floating_email'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Email address
          </label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <select
            id='sex'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
            value={data.sex}
            onChange={e => setData({ ...data, sex: e.target.value })}
          >
            <option value='Sex'>M</option>
            <option>F</option>
          </select>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <select
            id='sex'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
            value={data.position}
            onChange={e => setData({ ...data, position: e.target.value })}
          >
            <option value='Position'>Position</option>
            <option>Assistant</option>
            <option>Supervisor</option>
          </select>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='number'
            name='salary'
            id='salary'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
            value={data.salary}
            onChange={e => setData({ ...data, salary: e.target.value })}
          />
          <label
            htmlFor='salary'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Salary
          </label>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='floating_first_name'
              id='floating_first_name'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.firstname}
              onChange={e => setData({ ...data, firstname: e.target.value })}
            />
            <label
              htmlFor='floating_first_name'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              First name
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='floating_last_name'
              id='floating_last_name'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.lastname}
              onChange={e => setData({ ...data, lastname: e.target.value })}
            />
            <label
              htmlFor='floating_last_name'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Last name
            </label>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='relative z-0 w-full mb-6 group mr-4'>
            <input
              type='text'
              name='sup_id'
              id='sup_id'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.supervisorid}
              onChange={e => setData({ ...data, supervisorid: e.target.value })}
            />
            <label
              htmlFor='sup_id'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Supervisor ID
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input
              type='text'
              name='branch_no'
              id='branch_no'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.branchnumber}
              onChange={e => setData({ ...data, branchnumber: e.target.value })}
            />
            <label
              htmlFor='sup_id'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Branch ID
            </label>
          </div>
          <div className='relative z-0 w-full mb-6 group ml-4'>
            <input
              type='date'
              name='floating_company'
              id='dob'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
              value={data.date_of_birth}
              onChange={e =>
                setData({ ...data, date_of_birth: e.target.value })
              }
            />
            <label
              htmlFor='dob'
              className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Date of Birth
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
