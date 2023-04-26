import { useState, useCallback, useEffect } from 'react'

import useHttp from '../hooks/useHttp'

function Properties() {
  const [properties, setProperties] = useState([])

  const { isLoading, error, sendRequest } = useHttp()

  const fetchProperties = useCallback(async () => {
    try {
      const response = await sendRequest('/property/properties')
      setProperties(response.properties)
    } catch (err) {
      console.log(err)
    }
  }, [sendRequest])

  useEffect(() => {
    fetchProperties()
  }, [fetchProperties])

  return (
    <div className='px-10 py-4'>
      <div className='font-bold font-manrope text-xl'>All Properties -</div>
      <div className='mt-4'>
        <div className='w-full flex flex-wrap'>
          {properties.map(result => {
            const keys = Object.keys(result)

            return (
              <div className='inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'>
                <span className='font-bold'>Property ID: </span>{' '}
                {result.PropertyID} <br />
                <span className='font-bold'>Type:</span> {result.type} <br />
                <span className='font-bold'>Rooms:</span> {result.rooms} <br />
                <span className='font-bold'>Rent:</span> {result.rent} <br />
                <span className='font-bold'>Address:</span>{' '}
                {result.PropertyAddress} <br />
                <span className='font-bold'>City:</span> {result.City} <br />
              </div>
            )

            return (
              <div className='inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 m-2'>
                {keys.map(key => {
                  return (
                    <p>
                      <span className='font-bold'>{key}:</span> {result[key]}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Properties
