import { useState } from 'react'

import useHttp from '../hooks/useHttp'

function Search() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const [searchResults, setSearchResults] = useState([])

  const { isLoading, error, sendRequest } = useHttp()

  const handleSearch = async e => {
    e.preventDefault()
    try {
      const response = await sendRequest('/fetch/all/?text=' + search)
      switch (category) {
        case 'Property':
          setSearchResults(response.properties)
          break
        case 'Owner':
          setSearchResults(response.owners)
          break
        case 'Lease':
          setSearchResults(response.lease)
          break
        case 'Branch':
          setSearchResults(response.branch)
          break
        case 'Client':
          setSearchResults(response.client)
          break
        case 'Staff':
          setSearchResults(response.staff)
          break
        default:
          setSearchResults([])
      }
    } catch (err) {
      console.log(err)
    }
  }

  console.log(searchResults)

  return (
    <div className='mt-4'>
      <form className='px-16 py-4' onSubmit={e => handleSearch(e)}>
        <div className='flex'>
          <select
            id='category'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5  '
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option>Property</option>
            <option>Owner</option>
            <option>Lease</option>
            <option>Branch</option>
            <option>Client</option>
            <option>Staff</option>
          </select>
          <div className='relative w-full'>
            <input
              type='search'
              id='search-dropdown'
              className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
              placeholder='Search Anything...'
              required
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button
              type='submit'
              className='absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
          </div>
        </div>
      </form>
      <div className='mt-4 px-10'>
        <div className='w-full flex flex-wrap'>
          {searchResults.map(result => {
            delete result?.Password

            const keys = Object.keys(result)

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

export default Search
