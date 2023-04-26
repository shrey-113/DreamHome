import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../store/authContext'
import useHttp from '../hooks/useHttp'

function Branches() {
  const { state } = useContext(AuthContext)

  const [cities, setCities] = useState([])
  const [city, setCity] = useState('Choose a City')

  const [data, setData] = useState({
    branches: [],
    staffNo: [],
    branchesNumber: [
      {
        BranchesNumber: 0,
      },
    ],
  })

  const { isLoading, error, sendRequest } = useHttp()

  const fetchCities = useCallback(async () => {
    try {
      const response = await sendRequest('/search/cities')
      setCities(response.cities)
    } catch (err) {
      console.log(err)
    }
  }, [sendRequest])

  const handleUpdateCity = async e => {
    setCity(e.target.value)

    try {
      const response = await sendRequest('/search/cities/' + e.target.value)
      console.log(response)
      setData(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCities()
  }, [fetchCities])

  return (
    <div className='mt-4 px-6'>
      <select
        id='countries'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        value={city}
        onChange={e => handleUpdateCity(e)}
      >
        <option selected>Choose a City</option>
        {cities.map(city => (
          <option key={city.City} value={city.City}>
            {city.City}
          </option>
        ))}
      </select>

      {data?.branchesNumber[0]?.BranchesNumber > 0 && (
        <div className='my-6 px-2 text-xl'>
          Total Branches in {city}: {data.branchesNumber[0].BranchesNumber}{' '}
          <br />
          <br />
          <h2 className='font-semibold text-gray-900'>Staff -</h2>
          {data.staffNo.map(staff => {
            return (
              <div>
                {staff?.Position}s : {staff?.NoOfStaff}
              </div>
            )
          })}
        </div>
      )}

      <div className='mt-4 flex flex-wrap'>
        {data.branches.map(branch => {
          return (
            <Link
              to={`/branches/${branch.City}/${branch.BranchNumber}`}
              className='inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'
            >
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                {branch.BranchAddress}
              </h5>
              <p className='font-normal text-gray-700 '>
                Branch Number: {branch.BranchNumber} <br />
                Manager ID: {branch.ManagerID} <br />
                Manager: {branch.Manager} <br />
                Telephone Number: {branch.TelephoneNumber}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Branches
