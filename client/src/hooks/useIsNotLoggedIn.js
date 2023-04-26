import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../store/authContext'

export default () => {
  const { state } = useContext(AuthContext)

  const navigate = useNavigate()
  useEffect(() => {
    if (state.isAuthenticated === false) {
      navigate('/')
    }
  }, [state, navigate])
}
