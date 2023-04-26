import { useState, useCallback, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import useHttp from '../hooks/useHttp'

function StaffInfo() {
  const { id, city, staffId } = useParams()

  const [data, setData] = useState({})

  const { isLoading, error, sendRequest } = useHttp()

  const fetchBranchInfo = useCallback(async () => {
    try {
      const response = await sendRequest(
        '/search/cities/' + city + '/' + id + '/' + staffId
      )
      setData(response)
    } catch (err) {
      console.log(err)
    }
  }, [sendRequest, city, id, staffId])

  useEffect(() => {
    fetchBranchInfo()
  }, [fetchBranchInfo])

  console.log(data)

  return (
    <div className='my-6 px-2 text-xl'>
      <div className='w-full flex items-center justify-center'>
        <div className='mt-4'>
          {data?.staffDetails?.map(manager => {
            return (
              <div
                to={`${manager?.StaffID}`}
                className='inline-block max-w-sm px-10 py-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'
              >
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 '>
                  {manager?.Firstname + ' ' + manager?.LastName}
                </h5>
                <p className='font-normal text-gray-700 '>
                  ID: {manager?.StaffID} <br />
                  Email: {manager?.Email} <br />
                  Sex: {manager?.Sex} <br />
                  Position: {manager?.Position} <br />
                  Salary: {manager?.Salary} <br />
                  Branch Number: {manager?.BranchNumber} <br />
                  Supervisor ID: {manager?.SupervisorID} <br />
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StaffInfo
