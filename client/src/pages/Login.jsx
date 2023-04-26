import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import useHttp from '../hooks/useHttp'
import { AuthContext } from '../store/authContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { dispatch } = useContext(AuthContext)

  const { isLoading, error, sendRequest } = useHttp()

  const navigate = useNavigate()

  const submitHandler = async () => {
    try {
      const response = await sendRequest(
        '/login',
        'POST',
        JSON.stringify({
          email,
          password,
        })
      )

      dispatch({
        type: 'login',
        payload: {
          token: response.token,
          role: response.role,
          branchnumber: response.branch,
        },
      })

      navigate(`/branch/${response.branch}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <h1 className='text-2xl mb-10'>Log In</h1>
      <form
        className='flex flex-col justify-center w-96'
        onSubmit={e => {
          e.preventDefault()
          submitHandler()
        }}
      >
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='name@dreamhome.com'
            required={true}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Your password
          </label>
          <input
            type='password'
            id='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            required={true}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='text-white bg-gray-500 hover:bg-gray-700 transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
