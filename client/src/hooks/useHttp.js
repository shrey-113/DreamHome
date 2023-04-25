import { useState, useCallback, useRef, useEffect, useContext } from 'react'

import { AuthContext } from '../context/auth-context'

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const { state, dispatch } = useContext(AuthContext)

  const activeHttpRequests = useRef([])

  const sendRequest = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = {
        'Content-Type': 'application/json',
      }
    ) => {
      setIsLoading(true)
      const httpAbortCtrl = new AbortController()
      activeHttpRequests.current.push(httpAbortCtrl)

      try {
        const token = state.token || null

        const response = await fetch(import.meta.env.VITE_API_ENDPOINT + url, {
          method,
          body,
          headers: {
            ...headers,
            Authorization: 'Bearer ' + token,
          },
          // signal: httpAbortCtrl.signal,
        })

        if (response.status === 401) {
          dispatch({
            type: 'logout',
          })
        }

        const responseData = await response.json()

        activeHttpRequests.current = activeHttpRequests.current.filter(
          reqCtrl => reqCtrl !== httpAbortCtrl
        )

        if (!response.ok) {
          setIsLoading(false)
          throw new Error(responseData.message)
        }

        if (response.status !== 200 && response.status !== 201) {
          setIsLoading(false)
          throw new Error(responseData.message)
        }

        setIsLoading(false)
        return responseData
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
        throw err
      }
    },
    []
  )

  const clearError = () => {
    setError(null)
  }

  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
    }
  }, [])

  return { isLoading, error, sendRequest, clearError }
}
