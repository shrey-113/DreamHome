import { useState, useCallback, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import useHttp from '../hooks/useHttp'

function BranchInfo() {
  const { id, city } = useParams()

  const [data, setData] = useState({})

  const { isLoading, error, sendRequest } = useHttp()

  const fetchBranchInfo = useCallback(async () => {
    try {
      const response = await sendRequest('/search/cities/' + city + '/' + id)
      setData(response)
    } catch (err) {
      console.log(err)
    }
  }, [sendRequest, city, id])

  useEffect(() => {
    fetchBranchInfo()
  }, [fetchBranchInfo])

  console.log(data)

  return (
    <div className='my-6 px-2 text-xl'>
      <div className='w-full flex items-center justify-center'>
        <div className='block max-w-sm py-8 px-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '></h5>
          <p className='font-normal text-gray-700 '>
            <span className='font-bold'>
              ID: {data?.branchDetails?.[0]?.BranchNumber}
            </span>
            <br />
            Address - {data?.branchDetails?.[0]?.BranchAddress}
            <br />
            City - {data?.branchDetails?.[0]?.City}
            <br />
            Manager ID - {data?.branchDetails?.[0]?.ManagerID}
            <br />
            Phone - {data?.branchDetails?.[0]?.TelephoneNumber}
            <br />
            <span className='font-semibold'>
              Total Salary - {data?.totalSalary?.[0]?.TotalSalary}
            </span>
          </p>
        </div>
      </div>
      <div className='mt-4'>
        <p className='font-bold px-2 py-2'> Manager: </p>
        {data?.ManagerDetails?.map(manager => {
          return (
            <Link
              to={`${manager?.StaffID}`}
              className='inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'
            >
              <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 '>
                {manager?.Firstname + ' ' + manager?.LastName}
              </h5>
              <p className='font-normal text-gray-700 '>
                ID: {manager?.StaffID} <br />
                Email: {manager?.Email} <br />
              </p>
            </Link>
          )
        })}
      </div>
      <div className='mt-4'>
        <p className='font-bold px-2 py-2'> Supervisor(s): </p>
        <div className='w-full flex flex-wrap'>
          {data?.SupervisorDetails?.map(manager => {
            return (
              <Link
                to={`${manager?.StaffID}`}
                className='inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'
              >
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 '>
                  {manager?.Firstname + ' ' + manager?.LastName}
                </h5>
                <p className='font-normal text-gray-700 '>
                  ID: {manager?.StaffID} <br />
                  Email: {manager?.Email} <br />
                </p>
              </Link>
            )
          })}
        </div>
      </div>
      <div className='mt-4'>
        <p className='font-bold px-2 py-2'> Assistant(s): </p>
        <div className='w-full flex flex-wrap'>
          {data?.AssistantDetails?.map(manager => {
            return (
              <Link
                to={`${manager?.StaffID}`}
                className='inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'
              >
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 '>
                  {manager?.Firstname + ' ' + manager?.LastName}
                </h5>
                <p className='font-normal text-gray-700 '>
                  ID: {manager?.StaffID} <br />
                  Email: {manager?.Email} <br />
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BranchInfo
